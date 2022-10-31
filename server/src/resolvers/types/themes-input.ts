import { Field, InputType, ID } from 'type-graphql'
import { Themes } from '../../models/themes.model'

@InputType()
export class ThemesInput implements Partial<Themes> {
  @Field(() => ID, { nullable: true })
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  intro: string

  @Field({ nullable: true })
  desc: string
}
