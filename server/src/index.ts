import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { connect } from 'mongoose'
import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import { UsersModel } from './models/users.model'
import cors from 'cors'

// Resolvers
import { NotesResolver } from './resolvers/notes.resolver'
import { UsersResolver } from './resolvers/users.resolver'
import { NewsResolver } from './resolvers/news.resolver'
import { ThemesResolver } from './resolvers/themes.resolver'
import { createAccessToken, createRefreshToken } from './resolvers/auth'
import { sendRefreshToken } from './resolvers/sendRefreshToken'
import { PostsResolver } from './resolvers/posts.resolver'
import { TripResolver } from './resolvers/trip.resolver'
import { getCoordinate } from './puppeteer/index'

const executeMain = async () => {
  dotenv.config()
  // getCoordinate()

  const schema = await buildSchema({
    resolvers: [
      NotesResolver,
      UsersResolver,
      NewsResolver,
      PostsResolver,
      ThemesResolver,
      TripResolver,
    ],
    emitSchemaFile: true,
    validate: false,
  })

  const mongoose = await connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.207abqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )

  await mongoose.connection
  //* APOLLO SERVER
  const server = new ApolloServer({ schema: schema, context: ({ req, res }) => ({ req, res }) })
  const expressServer: Express.Application = Express()
  expressServer.use(cors({ origin: 'http://localhost:3000', credentials: true }))
  expressServer.use(cookieParser())

  //* REST API Route for mobile JWT REFRESH TOKEN
  expressServer.post('/refresh_token_from_mobile', async (req, res) => {
    console.log('req.headers.authorization', req.headers.authorization)
    const refreshToken = req.headers.authorization
    if (!refreshToken) {
      return res.send({ ok: false, accessToken: '' })
    }
    let payload: any = null
    const tokenArray = refreshToken.split(' ')

    try {
      payload = verify(tokenArray[1], process.env.REFRESH_TOKEN_SECRET)
      console.log('payload', payload)
    } catch (err) {
      console.log(err)

      return res.send({ ok: false, accessToken: '' })
    }

    //* token is valid and we can send back an access token
    const user = await UsersModel.findOne({ _id: payload.userId })
    if (!user) {
      return res.send({ ok: false, accessToken: '' })
    }
    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: '' })
    }
    // sendRefreshToken(res, createRefreshToken(user))
    return res.send({
      ok: true,
      accessToken: createAccessToken(user),
      refreshToken: createRefreshToken(user),
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      status: user.status,
    })
  })
  //* REST API Route for web JWT REFRESH TOKEN
  expressServer.post('/refresh_token_from_web', async (req, res) => {
    console.log('req.cookies', req.cookies)
    const token = req.cookies.jid
    if (!token) {
      return res.send({ ok: false, accessToken: '' })
    }
    let payload: any = null
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET)
      console.log(payload)
    } catch (err) {
      console.log(err)
      return res.send({ ok: false, accessToken: '' })
    }

    //* token is valid and we can send back an access token
    const user = await UsersModel.findOne({ _id: payload.userId })
    if (!user) {
      return res.send({ ok: false, accessToken: '' })
    }
    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: '' })
    }
    sendRefreshToken(res, createRefreshToken(user))
    return res.send({ ok: true, accessToken: createAccessToken(user) })
  })

  server.applyMiddleware({ app: expressServer })
  const PORT = process.env.PORT || 3333
  expressServer.listen({ port: PORT }, () =>
    console.log(
      `✨✨Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`,
    ),
  )
}

executeMain().catch((error) => {
  console.log(error, 'error')
})
