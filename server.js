import express from 'express'
import fs from 'fs'

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === 'production'
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000
// eslint-disable-next-line no-undef
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFileSync('./dist/client-app/index.html', 'utf-8')
  : ''

const app = express()

let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    build: {
      ssr: true,
    },
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client-app', { extensions: [] }))
}

app.use('/*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render

    if (!isProduction) {
      template = fs.readFileSync('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('./src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server-app/entry-server.js')).render
    }

    const rendered = await render(url)

    const html = template.replace('<!--app-html-->', rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

app.use(
  express.static('./dist', { maxAge: "30d" })
)

app.listen(port, () => {
  console.log(`Example app listening on port1 ${port}`)
})
