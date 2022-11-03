import { makeVar } from '@apollo/client'

export const boatLocationVar = makeVar({
  date: 'UNKNOWN',
  description: 'UNKNOWN',
  latitude: 0,
  longitude: 0,
  name: 'UNKNOWN',
})
