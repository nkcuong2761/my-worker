import { Router } from 'itty-router'
import Posts from './posts.js'

const router = Router()
router
  .get('/api/posts', Posts)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)
