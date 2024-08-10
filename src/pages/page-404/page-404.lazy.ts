import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./page-404').then(module => ({
//     default: module.Page404
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
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