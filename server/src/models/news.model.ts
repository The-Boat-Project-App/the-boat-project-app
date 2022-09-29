import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType({ description: 'The News Model' })
@modelOptions({ schemaOptions: { collection: 'news', timestamps: true } })
export class News {
  @Field(() => ID)
  id: string

  @Field()
  @Property({ type: () => String, required: true })
  title: string

  @Field()
  @Property({ type: () => String, required: true })
  author: string

  @Field({ nullable: true })
  @Property({ type: () => String, required: false })
  mainPicture: string

  @Field({ nullable: true })
  @Property({ type: () => String, required: false })
  content: string

  @Field()
  @Property({ required: true, default: Date.now })
  createdAt: Date

  @Field({ nullable: true })
  @Property({ type: Boolean, required: false })
  isActive: boolean
}

export const NewsModel = getModelForClass(News)
