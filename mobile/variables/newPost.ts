import { makeVar } from '@apollo/client'

export const newPostVar = makeVar({
  title: 'UNKNOWN',
  image: 'UNKNOWN',
  content: '<div>Unknown</div>',
  intro: 'UNKNOWN',
})
