import { createElement, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';

// For PROD
// const ContactPage = lazy(() =>
//   import('./contact-page').then(module => ({
//     default: module.ContactPage
//   }))
// )

// Only for DEV
const ContactPage = lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./contact-page').then(module => {
        resolve({ 
          default: module.ContactPage
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

const enhance = compose((component) => 
  withSuspense(component, { FallbackComponent: PageFallback } )
)

export const contactPageRoute: RouteObject = {
  path: pathKeys.contact(),
  element: createElement(enhance(ContactPage))
}