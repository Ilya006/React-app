import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./contact-page').then(module => ({
//     default: module.ContactPage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
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