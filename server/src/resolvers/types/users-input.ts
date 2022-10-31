import { Field, InputType, ID } from 'type-graphql'
import { Users } from '../../models/users.model'

@InputType()
export class UsersInput implements Partial<Users> {
  @Field(() => ID, { nullable: true })
  id: string

  @Field({ nullable: true })
  firstName: string

  @Field({ nullable: true })
  lastName: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  password: string

  @Field({ nullable: true })
  avatar: string

  @Field({ nullable: true })
  audio: string

  @Field({ nullable: true })
  bio: string

  @Field({ nullable: true })
  lang: string

  @Field({ nullable: true })
  appLang: string

  @Field({ nullable: true })
  status: string

  @Field({ nullable: true })
  country: string

  @Field({ nullable: true })
  active: boolean

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  lastLogin: Date
}
