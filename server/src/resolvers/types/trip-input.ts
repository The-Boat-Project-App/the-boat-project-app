import { Ref } from '@typegoose/typegoose'
import { Field, InputType, ID } from 'type-graphql'
import { Boat } from '../../models/trips/boat'
import { Location } from '../../models/trips/location'
import { Trip } from '../../models/trips/trip.model'
import { Users } from '../../models/users.model'

@InputType()
export class TripInput implements Partial<Trip> {
  @Field(() => ID)
  id: string

  @Field(() => Boat)
  private boat?: Boat

  @Field(() => Location)
  private Location?: [Location]

  @Field({ nullable: true })
  private country?: string

  @Field({ nullable: true })
  private passengers?: Ref<Users>[]

  @Field({ nullable: true })
  private startDate?: string

  @Field({ nullable: true })
  private endDate?: string

  @Field({ nullable: true })
  private distanceTravelled?: number

  @Field({ nullable: true })
  private onGoing?: boolean
}
