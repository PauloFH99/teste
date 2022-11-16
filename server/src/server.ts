import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { authRoutes } from './routes/auth'
import { userRoutes } from './routes/user'

export async function bootstrap() {

    const fastify = Fastify({
        logger: true,
    })
    

    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(jwt, {
        secret: process.env.SECRET_JWT,
    })

    fastify.register(authRoutes)
    fastify.register(userRoutes)

    await fastify.listen({ port: 3335 })
    
}

bootstrap()