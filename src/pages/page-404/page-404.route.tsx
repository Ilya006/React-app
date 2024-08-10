import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';

// For PROD
// const Page404 = lazy(() =>
//   import('./page-404').then(module => ({
//     default: module.Page404
//   }))
// )

// Only for DEV
const Page404 = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./page-404').then(module => {
        resolve({ 
          default: module.Page404
        })
      })
    }, 2000)
  })
})

function PageFallback() {
  return (
    <h1>hello world</h1>
  )
}

const enhace = compose((component) => 
  withSuspense(component, { FallbackComponent: PageFallback })
)

export const page404Route: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(enhace(Page404))
}