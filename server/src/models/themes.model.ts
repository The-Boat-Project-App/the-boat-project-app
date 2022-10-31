import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose'
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType({ description: 'The Themes Model' })
@modelOptions({ schemaOptions: { collection: 'themes', timestamps: true } })
export class Themes {
  @Field(() => ID)
  id: string

  @Field()
  @Property({ type: () => String, required: true })
  name: string

  @Field()
  @Property({ type: () => String, required: true })
  intro: string

  @Field()
  @Property({ type: () => String, required: true })
  desc: string
}

export const ThemesModel = getModelForClass(Themes)
