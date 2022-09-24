import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { connect } from 'mongoose'
import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import { UsersModel, Users } from './models/users.model'

//Resolvers
import { NotesResolver } from './resolvers/notes.resolver'
import { UsersResolver } from './resolvers/users.resolver'
import { resolve } from 'path'
import { createAccessToken, createRefreshToken } from './resolvers/auth'
import { sendRefreshToken } from './resolvers/sendRefreshToken'

const executeMain = async () => {
  dotenv.config()

  const schema = await buildSchema({
    resolvers: [NotesResolver, UsersResolver],
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
  expressServer.use(cookieParser())

  //* REST API Route for JWT REFRESH TOKEN
  expressServer.post('/refresh_token', async (req, res) => {
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

  expressServer.listen({ port: process.env.PORT }, () =>
    console.log(
      `✨✨Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`,
    ),
  )
}

executeMain().catch((error) => {
  console.log(error, 'error')
})
