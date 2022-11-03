import {
  Resolver,
  Mutation,
  Arg,
  Query,
  ID,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
} from 'type-graphql'
import { TripModel, Trip, Location } from '../models/trips/trip.model'
import { Boat } from '../models/trips/boat'
// import { Location } from '../models/trips/location'
import { getCoordinate } from '../puppeteer/index'
import { TripInput } from './types/trip-input'
import { sign } from 'jsonwebtoken'
import { MyContext } from './MyContext'
import { createAccessToken, createRefreshToken } from './auth'
import { isAuth } from './isAuth'
import { sendRefreshToken } from './sendRefreshToken'

@Resolver((_of) => Trip)
export class TripResolver {
  @Mutation(() => Trip, { name: 'updateTrip' })
  async updateTrips(): Promise<Trip> {
    console.log('resolver atteint')
    const coords = await getCoordinate()
    console.log('🤩coords', coords)
    const updatedTrip = await TripModel.updateOne(
      { _id: '63627a16ad3d7a6d9999e8e9' },
      {
        $push: {
          locations: {
            latitude: Number(coords.coords[0]),
            longitude: Number(coords.coords[1]),
            date: coords.date,
            name: coords.currentPort,
            description: 'description',
          },
        },
      },
      { new: true },
    )
    const refreshedTrip = await TripModel.findOne({ _id: '63627a16ad3d7a6d9999e8e9' })

    console.log('updatedTrip', refreshedTrip)
    return refreshedTrip
  }

  //   @Mutation(() => Boolean)
  //   async revokeRefreshTokensForUser(@Arg('userId', () => String) userId: string) {
  //     const users = await UsersModel.findByIdAndUpdate(
  //       { _id: userId },
  //       { $inc: { tokenVersion: 1 } },
  //       { new: true },
  //     )
  //     return true
  //   }
}
