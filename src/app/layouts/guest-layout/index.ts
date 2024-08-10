import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./guest.layout').then((module) => ({
//     default: module.GuestLayout
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./guest.layout').then(module => {
        resolve({ 
          default: module.GuestLayout
        })
      })
    }, 2000)
  })
})