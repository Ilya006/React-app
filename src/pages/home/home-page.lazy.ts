import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./home-page').then(module => ({
//     default: module.HomePage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
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