import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';

// For PROD
// const HomePage = lazy(() =>
//   import('./home-page').then(module => ({
//     default: module.HomePage
//   }))
// )

// Only for DEV
const HomePage = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./home-page').then(module => {
        resolve({ 
          default: module.HomePage
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

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(enhace(HomePage))
}