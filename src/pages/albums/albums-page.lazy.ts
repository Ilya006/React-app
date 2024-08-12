import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./albums-page').then(module => ({
//     default: module.AlbumsPage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./albums-page').then(module => {
        resolve({ 
          default: module.AlbumsPage
        })
      })
    }, 200)
  })
})