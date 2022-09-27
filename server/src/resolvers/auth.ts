import { Users } from '../models/users.model'
import { sign } from 'jsonwebtoken'

export const createAccessToken = (user: Users) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

export const createRefreshToken = (user: Users) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '14d' },
  )
}
