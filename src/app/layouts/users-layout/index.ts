import { lazy } from 'react';

// For PROD
// export default lazy(() =>
//   import('./user.layout').then((module) => ({ 
//     default: module.UserLayout
//   }))
// )

// Only for DEV
export default lazy<React.ComponentType>(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('./users.layout').then(module => {
        resolve({ 
          default: module.UsersLayout
        })
      })
    }, 200)
  })
})