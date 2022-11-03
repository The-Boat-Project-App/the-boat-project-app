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
import { PostsInput } from './types/posts-input'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MyContext } from './MyContext'
import { createAccessToken, createRefreshToken } from './auth'
import { isAuth } from './isAuth'
import { sendRefreshToken } from './sendRefreshToken'

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
  @Field()
  refreshToken: string
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  avatar: string
  @Field()
  status: string
}

@ObjectType()
class RegisterResponse {
  @Field()
  accessToken: string
  @Field()
  refreshToken: string
  @Field()
  firstName: string
  @Field()
  lastName: string
  @Field()
  avatar: string
  @Field()
  status: string
}

@Resolver((_of) => Users)
export class UsersResolver {
  //* get userData with userid from middleware
  @Query(() => Users, { nullable: false, name: 'user' })
  @UseMiddleware(isAuth)
  async getUserData(@Ctx() { payload }: MyContext) {
    return await UsersModel.findById({ _id: payload.userId })
  }
  //*

  @Query((_returns) => Users, { nullable: false, name: 'users' })
  async getUsersById(@Arg('id') id: string) {
    return await UsersModel.findById({ _id: id })
  }

  @Query(() => [Users], { name: 'usersList', description: 'Get List of Users' })
  async getAllUsers() {
    return await UsersModel.find()
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
    const refreshToken = createRefreshToken(user)
    sendRefreshToken(res, createRefreshToken(user))
    console.log('user avant return du sign in', user)
    return {
      accessToken: createAccessToken(user),
      refreshToken: refreshToken,
      lastName: user.lastName,
      firstName: user.firstName,
      avatar: user.avatar,
      status: user.status,
    }
  }

  @Mutation(() => RegisterResponse, { name: 'createUsers' })
  async createUsers(
    @Arg('newUsersInput') { firstName, lastName, email, password }: UsersInput,
    @Ctx() { req, res }: MyContext,
  ): Promise<RegisterResponse> {
    const hashedPassword = await hash(password, 12)
    const newUser = await UsersModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      avatar:
        'https://res.cloudinary.com/matthieudev/image/upload/v1653480800/generic_avatar_mnfcbx.png',
      status: 'regular',
    })
    const user = await newUser.save()
    console.log('lastnam créé dans resolver', user.lastName)

    //* Registration successful
    const refreshToken = createRefreshToken(user)
    const accessToken = createAccessToken(user)
    console.log('accessToken dans resolver', accessToken)
    console.log('refreshToken dans resolver', refreshToken)
    sendRefreshToken(res, refreshToken)
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
      lastName: user.lastName,
      firstName: user.firstName,
      avatar: user.avatar,
      status: user.status,
    }
  }

  // @Mutation(() => Users, { name: 'updateUsers' })
  // async updateUsers(
  //   @Arg('editUsersInput') { id, title, description, backgroundColor, isArchived }: UsersInput,
  // ): Promise<Users> {
  //   const users = await UsersModel.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       title,
  //       description,
  //       backgroundColor,
  //       isArchived,
  //     },
  //     { new: true },
  //   )

  //   return users
  // }

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
