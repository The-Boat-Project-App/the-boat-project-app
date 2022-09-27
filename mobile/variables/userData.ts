import { makeVar } from '@apollo/client'

export const userDataVar = makeVar({ firstName: 'UNKNOWN', lastName: 'UNKNOWN' })
