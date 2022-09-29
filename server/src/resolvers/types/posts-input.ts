import { Field, InputType, ID } from 'type-graphql'
import { Posts } from '../../models/posts.model'

@InputType()
export class PostsInput implements Partial<Posts> {
  @Field(() => ID, { nullable: true })
  id: string

  @Field()
  title: string

  @Field()
  author: string

  @Field({ nullable: true })
  mainPicture: string

  @Field({ nullable: true })
  content: string

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  validated: boolean

  @Field({ nullable: true })
  likes: number
}
