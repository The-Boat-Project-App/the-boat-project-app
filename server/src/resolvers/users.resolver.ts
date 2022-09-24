import {
  Resolver,
  Mutation,
  Arg,
  Query,
  ID,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
} from 'type-graphql'
import { UsersModel, Users } from '../models/users.model'
import { UsersInput } from './types/users-input'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MyContext } from './MyContext'
import { createAccessToken, createRefreshToken } from './auth'
import { isAuth } from './isAuth'
import { sendRefreshToken } from './sendRefreshToken'
import { addResolveFunctionsToSchema } from 'apollo-server-express'

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
}

@Resolver((_of) => Users)
export class UsersResolver {
  @Query((_returns) => Users, { nullable: false, name: 'users' })
  async getUsersById(@Arg('id') id: string) {
    return await UsersModel.findById({ _id: id })
  }

  @Query(() => [Users], { name: 'usersList', description: 'Get List of Users' })
  async getAllUsers() {
    return await UsersModel.find()
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    return `your user id is : ${payload.userId}`
  }

  //* Sign-in with bcrypt compare & JWT
  @Mutation(() => LoginResponse, { name: 'loginUsers' })
  async login(
    @Arg('UsersLoginInput') { email, password }: UsersInput,
    @Ctx() { req, res }: MyContext,
  ): Promise<LoginResponse> {
    const user = await UsersModel.findOne({ email: email })
    if (!user) {
      throw new Error('could not find user')
    }

    const valid = await compare(password, user.password)

    if (!valid) {
      throw new Error('wrong password')
    }

    //* login successful
    sendRefreshToken(res, createRefreshToken(user))

    return {
      accessToken: createAccessToken(user),
    }
  }

  @Mutation(() => Users, { name: 'createUsers' })
  async createUsers(
    @Arg('newUsersInput') { firstName, lastName, email, password }: UsersInput,
  ): Promise<Users> {
    const hashedPassword = await hash(password, 12)
    const users = (
      await UsersModel.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      })
    ).save()

    return users
  }

  @Mutation(() => Users, { name: 'updateUsers' })
  async updateUsers(
    @Arg('editUsersInput') { id, title, description, backgroundColor, isArchived }: UsersInput,
  ): Promise<Users> {
    const users = await UsersModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        backgroundColor,
        isArchived,
      },
      { new: true },
    )

    return users
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg('userId', () => String) userId: string) {
    const users = await UsersModel.findByIdAndUpdate(
      { _id: userId },
      { $inc: { tokenVersion: 1 } },
      { new: true },
    )
    return true
  }

  @Mutation(() => String, { name: 'deleteUsers' })
  async deleteUsers(@Arg('id') id: string): Promise<String> {
    const result = await UsersModel.deleteOne({ _id: id })

    if (result.ok == 1) return id
    else return ''
  }
}
