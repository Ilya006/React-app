import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./about-page').then(module => ({
//     default: module.AboutPage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
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