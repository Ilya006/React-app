import fs from 'node:fs'

import express from 'express'
import compression from 'compression'
import sirv from 'sirv'

const app = express()

app.use(compression())
app.use('/', sirv('./dist/client-app', { extensions: [] }))
app.use(express.static('./dist', { maxAge: "30d" }))

app.use(async (req, res) => {
	try {
		const url = req.originalUrl
		const { render } = await import('./dist/server-app/entry-server.js')

		const appHtml = await render(url)
		const template = fs.readFileSync('./dist/client-app/index.html', 'utf-8')
		const html = template.replace(`<!--app-html-->`, () => appHtml.html)

		res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
	} catch (e) {
		console.log(e.stack)
		res.status(500).end(e.stack)
	}
})

app.listen(3000, () => {
	console.log('http://localhost:3000');
})