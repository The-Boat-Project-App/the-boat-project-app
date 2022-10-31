import { prop as Property, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'
import { Users } from '../users.model'
import { Boat } from './boat'
import { Location } from './location'

@ObjectType({ description: 'The Trips Model' })
@modelOptions({ schemaOptions: { collection: 'trip' } })
export class Trip {
  @Field(() => ID)
  id: string

  @Field(() => Boat)
  @Property({ type: () => Boat })
  private boat?: Boat

  @Field(() => Location)
  @Property({ type: () => [Location] })
  private Location?: [Location]

  @Field()
  @Property({ type: () => String, required: true })
  private country?: string

  @Property({ ref: () => Users })
  private passengers?: Ref<Users>[]

  @Field()
  @Property({ type: Date, required: true })
  private startDate?: string

  @Field()
  @Property({ type: Date, required: true })
  private endDate?: string

  @Field()
  @Property({ type: Number, required: true, default: 0 })
  private distanceTravelled?: number

  @Field()
  @Property({ type: Boolean, required: true, default: false })
  private onGoing?: boolean
}

export const TripModel = getModelForClass(Trip)
