import express from 'express'
import NodeCache from 'node-cache'
import axios from 'axios'
import https from 'https'

const cache = new NodeCache({ stdTTL: 28000 })
const app = express()
const port = 3000

const instance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});

app.use(express.json())

app.all('/api/*', async (req, res) => {
  const url = `https://api.kinopoisk.dev${req.originalUrl.replace('/api', '')}`
  const cacheData = cache.get(url)

  if (cacheData !== undefined) {
    return res.status(cacheData.status).json(cacheData.data)
  }

  try {
    const response = await instance({
      url: url,
      method: req.method,
      data: req.body,
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'ZVY8ZA7-G7YM4TV-P97CAY6-37244KD'
      }
    })

    cache.set(url, {
      status: response.status,
      data: response.data
    })

    res.status(response.status).json(response.data)
  } catch (error) {

    if (error.response) {
      cache.set(url, {
        status: error.response.status,
        data: error.response.data
      })

      res.status(error.response.status).json(error.response.data)
    } else {
      cache.set(url, {
        status: 500,
        data: 'Internal Server Error'
      })
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
