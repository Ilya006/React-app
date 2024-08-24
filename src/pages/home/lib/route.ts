import { createElement, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '~/shared/lib/react-router'
import { compose, withSuspense } from '~/shared/lib/react'
import { Curtain } from '~ui/Curtain'

// For PROD
// const HomePage = lazy(() =>
//   import('../ui').then(module => ({
//     default: module.HomePage
//   }))
// )

// Only for DEV
const HomePage = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../ui').then(module => {
        resolve({ 
          default: module.HomePage
        })
      })
    }, 200)
  })
})

const enhace = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(enhace(HomePage))
}