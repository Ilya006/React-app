import { createElement, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '../../shared/lib/react-router'
import { compose, withSuspense } from '../../shared/lib/react'

// For PROD
// const AboutPage = lazy(() =>
//   import('./contact-page').then(module => ({
//     default: module.AboutPage
//   }))
// )

// Only for DEV
const AboutPage = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./about-page').then(module => {
        resolve({ 
          default: module.AboutPage
        })
      })
    }, 2000)
  })
})

function Fallbac() {
  return (
    <h1>Hello suspens</h1>
  )
}

const enhance = compose((component) => withSuspense(component, { FallbackComponent: Fallbac }))

export const aboutPageRoute: RouteObject = {
  path: pathKeys.about(),
  element: createElement(enhance(AboutPage))
}