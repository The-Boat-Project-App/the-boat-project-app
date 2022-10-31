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
import { ThemesModel, Themes } from '../models/themes.model'
import { ThemesInput } from './types/themes-input'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { MyContext } from './MyContext'
import { createAccessToken, createRefreshToken } from './auth'
import { isAuth } from './isAuth'
import { sendRefreshToken } from './sendRefreshToken'

@ObjectType()
class ThemeCreatedResponse {
  @Field()
  id: string
  @Field()
  name: string
  @Field()
  intro: string
  @Field()
  desc: string
}

@Resolver((_of) => Themes)
export class ThemesResolver {
  //* create new theme

  @Mutation(() => ThemeCreatedResponse, { name: 'createThemes' })
  async createThemes(
    @Arg('newThemesInput') { name, intro, desc }: ThemesInput,
    @Ctx() { req, res }: MyContext,
  ): Promise<ThemeCreatedResponse> {
    const newTheme = await ThemesModel.create({
      name,
      intro,
      desc,
    })
    const theme = await newTheme.save()
    console.log('theme créé dans resolver', theme.name)

    return {
      name: theme.name,
      id: theme._id,
      intro: theme.intro,
      desc: theme.desc,
    }
  }

  //   @Mutation(() => Users, { name: 'updateUsers' })
  //   async updateUsers(
  //     @Arg('editUsersInput') { id, title, description, backgroundColor, isArchived }: UsersInput,
  //   ): Promise<Users> {
  //     const users = await ThemesModel.findByIdAndUpdate(
  //       { _id: id },
  //       {
  //         title,
  //         description,
  //         backgroundColor,
  //         isArchived,
  //       },
  //       { new: true },
  //     )

  //     return users
  //   }

  //   @Mutation(() => String, { name: 'deleteUsers' })
  //   async deleteUsers(@Arg('id') id: string): Promise<String> {
  //     const result = await UsersModel.deleteOne({ _id: id })

  //     if (result.ok == 1) return id
  //     else return ''
  //   }
}
