import { Field, InputType, ID } from 'type-graphql'
import { News } from '../../models/news.model'

@InputType()
export class NewsInput implements Partial<News> {
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
  isActive: boolean
}
