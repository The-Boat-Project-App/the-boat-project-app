import { prop as Property, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'
import { Users } from './users.model'

@ObjectType('CommentObject')
export class Comment {
  @Field(() => String)
  @Property({ type: () => String })
  content: string
  @Field(() => String)
  @Property({ type: () => String })
  author: string
  @Field(() => Date)
  @Property({ type: () => Date })
  date: Date
}

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
  intro: string

  @Field(() => Users)
  @Property({ ref: () => Users, type: () => String, required: true })
  public author?: Ref<Users>

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
  @Property({ type: () => String, required: false })
  validated: string

  @Field({ nullable: true })
  @Property({ type: Boolean, required: false })
  submitted: boolean

  @Field({ nullable: true })
  @Property({ type: Number, required: false, default: 0 })
  likes: number

  @Field(() => [Comment])
  @Property({ type: () => [Comment] })
  comments: Comment[] // This is a SubDocument Array
}

export const PostsModel = getModelForClass(Posts)
