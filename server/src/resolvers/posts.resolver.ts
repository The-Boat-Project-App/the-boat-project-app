import {
  Resolver,
  Mutation,
  Arg,
  Query,
  Subscription,
  PubSub,
  PubSubEngine,
  UseMiddleware,
  Ctx,
  Root,
} from 'type-graphql'
import { PostsModel, Posts } from '../models/posts.model'
import { Users } from '../models/users.model'
import { PostsInput } from './types/posts-input'
import { MyContext } from './MyContext'

import { isAuth } from './isAuth'

const channel = 'LIKES_CHANNEL'

@Resolver((_of) => Posts)
export class PostsResolver {
  @Query((_returns) => Posts, { nullable: false, name: 'Posts' })
  async getPostsById(@Arg('id') id: string) {
    const postData = await PostsModel.findById({ _id: id })
      .populate({ path: 'author', model: Users })
      .exec()
    console.log('✏️🧡postData dans resolver', postData)

    return postData
  }

  @Query(() => [Posts], { name: 'PostsList', description: 'Get List of Posts' })
  async getAllPosts() {
    return await PostsModel.find()
  }

  @Mutation(() => Posts, { name: 'createPosts' })
  @UseMiddleware(isAuth)
  async createPosts(
    @Arg('newPostsInput')
    { title, intro, content, mainPicture, likes, submitted, validated }: PostsInput,
    @Ctx() { payload }: MyContext,
  ): Promise<Posts> {
    const Posts = (
      await PostsModel.create({
        title,
        intro,
        content,
        author: payload.userId,
        mainPicture,
        likes,
        submitted,
        validated,
      })
    ).save()

    return Posts
  }

  @Mutation(() => Posts, { name: 'updatePosts' })
  async updatePosts(@Arg('editPostsInput') { id }: PostsInput): Promise<Posts> {
    const Posts = await PostsModel.findByIdAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } },
      { new: true },
    )

    return Posts
  }

  @Mutation(() => String, { name: 'deletePosts' })
  async deletePosts(@Arg('id') id: string): Promise<String> {
    const result = await PostsModel.deleteOne({ _id: id })

    if (result.ok == 1) return id
    else return ''
  }

  @Mutation(() => String, { name: 'addLikes' })
  async addLike(@PubSub() pubSub: PubSubEngine, @Arg('id') id: string): Promise<string> {
    const result = await PostsModel.findByIdAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } },
      { new: true },
    )
    console.log('result', result)
    const payload = result.likes
    await pubSub.publish(channel, payload)
    return result.likes
  }

  @Subscription({ topics: channel })
  likeAdded(
    @Root()
    {
      id,
      title,
      intro,
      author,
      mainPicture,
      content,
      createdAt,
      validated,
      submitted,
      comments,
      likes,
    }: Posts,
  ): Posts {
    return {
      id,
      title,
      intro,
      author,
      mainPicture,
      content,
      createdAt,
      validated,
      submitted,
      comments,
      likes,
    }
  }
}
