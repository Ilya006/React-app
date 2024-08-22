import { createElement } from 'react'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'
import { page404Route } from '@/pages/page-404'
import { homePageRoute } from '@/pages/home'
import { catalogPageRoute } from '@/pages/catalog'
import { BubbleError } from '@/shared/ui/BubbleError'
import { Curtain } from '@/shared/ui/Curtain'
import { compose, withSuspense } from '@/shared/lib/react'
import { pathKeys } from '@/shared/lib/react-router'
import mainLayout from '../layouts/main-layout'

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const routers = createBrowserRouter([
  {
    errorElement: createElement(BubbleError),
    children: [
      {
        element: createElement(enhance(mainLayout)),
        children: [homePageRoute, catalogPageRoute]
      },
      {
        element: createElement(Outlet),
        children: [page404Route]
      },
      {
        path: '*',
        loader: async () => redirect(pathKeys.page404())
      }
    ]
  }
])