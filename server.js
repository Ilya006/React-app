import express from 'express'
import fs from 'fs'
import path from 'path'

import { createServer as createViteServer } from 'vite'
const port = 3000

async function createServer () {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
    build: {
      ssr: true,
    }
  })

  app.use(vite.middlewares)

  app.get('/', async (req, res, next) => {
    const url = req.originalUrl || req.url

    try {
      let template = fs.readFileSync(
        path.resolve('./index.html'),
        'utf8'
      )
  
      template = await vite.transformIndexHtml(url, template)
      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx')
      const appHtml = render(url)
  
      const html = template.replace(
        '<!--ssr-outlet-->',
        appHtml
      )
    
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })
  
  app.use(
    express.static('./dist', { maxAge: "30d" })
  )
  
  app.listen(port, () => {
    console.log(`Example app listening on port1 ${port}`)
  })
}

createServer()