import { prop } from '@typegoose/typegoose'

export class Location {
  @prop({ type: String })
  private name?: string

  @prop({ type: String })
  private latitude?: number

  @prop({ type: String })
  private longitude?: number

  @prop({ type: Date })
  private date?: string

  @prop({ type: String })
  private description?: string
}
