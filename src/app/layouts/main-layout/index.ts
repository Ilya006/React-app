import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./ui').then((module) => ({
//     default: module.MainLayout
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./ui').then(module => {
        resolve({ 
          default: module.MainLayout
        })
      })
    }, 200)
  })
})