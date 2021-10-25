import { Router } from 'itty-router'
import Posts from './posts.js'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const router = Router()
  router
    .get('/api/posts', Posts)
    .get('*', () => new Response("Not found", { status: 404 }))
  router.handle(request)
}
