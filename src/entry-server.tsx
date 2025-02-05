import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './app'
import { StaticRouter } from 'react-router-dom/server'

export function render (url: string) {
  console.log('URL: ', url)

  return `
    <div id="root">${renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    )}</div>
  `
}