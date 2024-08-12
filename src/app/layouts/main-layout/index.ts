import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./main.layout').then((module) => ({
//     default: module.MainLayout
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./main.layout').then(module => {
        resolve({ 
          default: module.MainLayout
        })
      })
    }, 200)
  })
})