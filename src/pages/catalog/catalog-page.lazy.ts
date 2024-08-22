import { lazy } from 'react'

// For PROD
// export default lazy(() =>
//   import('./catalog-page').then(module => ({
//     default: module.CatalogPage
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./catalog-page').then(module => {
        resolve({ 
          default: module.CatalogPage
        })
      })
    }, 200)
  })
})