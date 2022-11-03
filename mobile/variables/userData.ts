import { makeVar } from '@apollo/client'

export const userDataVar = makeVar({
  firstName: 'UNKNOWN',
  lastName: 'UNKNOWN',
  avatar:
    'https://res.cloudinary.com/matthieudev/image/upload/v1659625192/generic-avatar_mpp1wf.png',
  status: 'UNKNOWN',
})
