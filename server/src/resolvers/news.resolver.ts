import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql'
import { NewsModel, News } from '../models/news.model'
import { NewsInput } from './types/news-input'
import { isAuth } from './isAuth'

@Resolver((_of) => News)
export class NewsResolver {
  @Query((_returns) => News, { nullable: false, name: 'News' })
  async getNewsById(@Arg('id') id: string) {
    return await NewsModel.findById({ _id: id })
  }

  @Query(() => [News], { name: 'NewsList', description: 'Get List of News' })
  async getAllNews() {
    return await NewsModel.find()
  }

  @Mutation(() => News, { name: 'createNews' })
  async createNews(
    @Arg('newNewsInput') { title, content, author, mainPicture }: NewsInput,
  ): Promise<News> {
    const News = (
      await NewsModel.create({
        title,
        content,
        author,
        mainPicture,
      })
    ).save()

    return News
  }

  // @Mutation(() => News, { name: 'updateNews' })
  // async updateNews(
  //   @Arg('editNewsInput') { id, title, description, backgroundColor, isArchived }: NewsInput,
  // ): Promise<News> {
  //   const News = await NewsModel.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       title,
  //       description,
  //       backgroundColor,
  //       isArchived,
  //     },
  //     { new: true },
  //   )

  //   return News
  // }

  @Mutation(() => String, { name: 'deleteNews' })
  async deleteNews(@Arg('id') id: string): Promise<String> {
    const result = await NewsModel.deleteOne({ _id: id })

    if (result.ok == 1) return id
    else return ''
  }
}
