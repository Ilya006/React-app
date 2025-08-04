import express from 'express'
import { createServer } from 'vite'
import fs from 'fs'

const app = express()

const vite = await createServer({
	server: { middlewareMode: true },
	appType: 'custom',
	build: {
		ssr: true,
	},
	base: '/',
})

app.use(vite.middlewares)

app.use(async (req, res) => {
	const url = req.originalUrl

	const render = (await vite.ssrLoadModule('./src/entry-server.tsx')).render
	let template = fs.readFileSync('./index.html', 'utf-8')
	template = await vite.transformIndexHtml(url, template)

	const appHtml = await render(url)
	const html = template.replace('<!--app-html-->', () => appHtml.html)

	res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
})

app.listen(8000, () => {
	console.log('http://localhost:8000');
})

