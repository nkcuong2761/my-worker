// const template = require('./post')

const Posts = async () => {
  const entries = await MY_KV.list()
  if (entries === null) {
    return new Response("entries not found", {status: 400})
  }

  let a=[]
  const values = await Promise.all(entries.keys.map(
    async (key) => {
      let g = await MY_KV.get(key.name)
      a.push(g)
    }
  ))
  const body = JSON.stringify(a)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'
  }

  return new Response(body, { headers })
  // return new Response(template(a), {headers})
}

export default Posts
