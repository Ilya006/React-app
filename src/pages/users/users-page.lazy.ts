import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./users-page').then(module => ({
//     default: module.UsersPage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./users-page').then(module => {
        resolve({ 
          default: module.UsersPage
        })
      })
    }, 200)
  })
})