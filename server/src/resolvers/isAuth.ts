import { verify } from 'jsonwebtoken'
import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'
import { MyContext } from './MyContext'

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization']
  console.log('authorization', authorization)
  if (!authorization) {
    throw new Error('not authenticated')
  }
  try {
    const token = authorization.split(' ')[1]
    console.log('token après split', token)
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET)
    context.payload = payload as any
    console.log('payload dans isauth', payload)
  } catch (err) {
    console.log('dans isAuth', err)
    throw new Error('not authenticated')
  }
  return next()
}
