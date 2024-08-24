import { createElement, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '~/shared/lib/react-router'
import { compose, withSuspense } from '~/shared/lib/react'
import { Curtain } from '~ui/Curtain'

// For PROD
// const Page404 = lazy(() =>
//   import('../ui').then(module => ({
//     default: module.Page404
//   }))
// )

// Only for DEV
const Page404 = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../ui').then(module => {
        resolve({ 
          default: module.Page404
        })
      })
    }, 200)
  })
})

const enhace = compose((component) => 
  withSuspense(component, { FallbackComponent: Curtain })
)

export const page404Route: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(enhace(Page404))
}