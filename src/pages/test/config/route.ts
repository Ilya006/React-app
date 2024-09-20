import { createElement, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { compose, withSuspense } from '~/shared/lib/react'
import { Curtain } from '~ui/Curtain'

// For PROD
// const Page404 = lazy(() =>
//   import('../ui').then(module => ({
//     default: module.Page404
//   }))
// )

// Only for DEV
const testPage = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../ui/test').then(module => {
        resolve({ 
          default: module.TestPage
        })
      })
    }, 200)
  })
})

const enhace = compose((component) => 
  withSuspense(component, { FallbackComponent: Curtain })
)

export const testPageRoute: RouteObject = {
  path: '/test',
  element: createElement(enhace(testPage))
}