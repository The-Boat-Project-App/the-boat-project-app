import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType({ description: 'The Users Model' })
@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
export class Users {
  @Field(() => ID)
  id: string

  @Field()
  @Property({ type: () => String, required: true })
  firstName: string

  @Field()
  @Property({ type: () => String, required: true })
  lastName: string

  @Field({ nullable: true })
  @Property({ type: String, required: true })
  email: string

  @Field({ nullable: true })
  @Property({ type: String, required: true })
  password: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  avatar: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  audio: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  bio: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  lang: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  app_lang: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  status: string

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  country: string

  @Field({ nullable: true })
  active: boolean

  @Field()
  @Property({ required: false, default: Date.now })
  createdAt: Date

  @Field()
  @Property({ required: false, default: Date.now })
  updatedAt: Date

  @Field()
  @Property({ required: false, default: Date.now })
  lastLogin: Date

  @Field()
  @Property({ required: false, default: 0 })
  tokenVersion: number
}

export const UsersModel = getModelForClass(Users)
