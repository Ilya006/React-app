import { lazy } from 'react'
import {compose, withSuspense} from "~/shared/lib/react";
import {Curtain} from "~ui/Curtain";

// For PROD
const MainLayout = lazy(() =>
  import('./ui').then((module) => ({
    default: module.MainLayout
  }))
)

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export default enhance(MainLayout)

// Only for DEV
// export default lazy<React.ComponentType>(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       import('./ui').then(module => {
//         resolve({ 
//           default: module.MainLayout
//         })
//       })
//     }, 200)
//   })
// })