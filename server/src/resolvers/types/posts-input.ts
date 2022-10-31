import { Field, InputType, ID } from 'type-graphql'

import { Posts } from '../../models/posts.model'

@InputType()
class Comment {
  @Field(() => String)
  content: string
  @Field(() => String)
  author: string
  @Field(() => Date)
  date: Date
}

@InputType()
export class PostsInput implements Partial<Posts> {
  @Field(() => ID, { nullable: true })
  id: string

  @Field()
  title: string

  @Field()
  intro: string

  @Field()
  author: string

  @Field({ nullable: true })
  mainPicture: string

  @Field({ nullable: true })
  content: string

  @Field({ nullable: true })
  createdAt: Date

  //* 3 values  : pending, validated, rejected
  @Field({ nullable: true })
  validated: string

  @Field({ nullable: true })
  submitted: boolean

  @Field({ nullable: true })
  likes: number

  @Field(() => [Comment], { nullable: true })
  comments: Comment[] // This is a SubDocument Array
}
