import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql'
import { Trip, TripModel } from './../models/trips/trip.model'

// @Resolver((_of) => Posts)
// export class PostsResolver {
//   @Query((_returns) => Posts, { nullable: false, name: 'Posts' })
//   async getPostsById(@Arg('id') id: string) {
//     return await PostsModel.findById({ _id: id })
//   }

//   @Query(() => [Posts], { name: 'PostsList', description: 'Get List of Posts' })
//   async getAllPosts() {
//     return await PostsModel.find()
//   }

// @Mutation(() => Posts, { name: 'createPosts' })
// async createPosts(
//   @Arg('newPostsInput') { title, content, author, mainPicture, likes }: PostsInput,
// ): Promise<Posts> {
//   const Posts = (
//     await PostsModel.create({
//       title,
//       content,
//       author,
//       mainPicture,
//       likes,
//     })
//   ).save()

//   return Posts
// }

//   @Mutation(() => Posts, { name: 'updatePosts' })
//   async updatePosts(
//     @Arg('editPostsInput') { id, title, description, backgroundColor, isArchived }: PostsInput,
//   ): Promise<Posts> {
//     const Posts = await PostsModel.findByIdAndUpdate(
//       { _id: id },
//       {
//         title,
//         description,
//         backgroundColor,
//         isArchived,
//       },
//       { new: true },
//     )

//     return Posts
//   }

//   @Mutation(() => String, { name: 'deletePosts' })
//   async deletePosts(@Arg('id') id: string): Promise<String> {
//     const result = await PostsModel.deleteOne({ _id: id })

//     if (result.ok == 1) return id
//     else return ''
//   }
// }
