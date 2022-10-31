import { prop } from '@typegoose/typegoose'

export class Boat {
  @prop({ type: String })
  private name?: string

  @prop({ type: String })
  private size?: string

  @prop({ type: String })
  private mmsi?: string

  @prop({ type: String })
  private picture?: string

  @prop({ type: String })
  private description?: string
}
