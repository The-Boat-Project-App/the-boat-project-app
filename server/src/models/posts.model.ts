import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType({ description: 'The Posts Model' })
@modelOptions({ schemaOptions: { collection: 'posts', timestamps: true } })
export class Posts {
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
  validated: boolean

  @Field({ nullable: true })
  @Property({ type: Number, required: false, default: 0 })
  likes: number
}

export const PostsModel = getModelForClass(Posts)
