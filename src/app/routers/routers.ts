import { createElement } from 'react'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'
import { page404Route } from '~/pages/page-404'
import { homePageRoute } from '~/pages/home'
import { BubbleError } from '~ui/BubbleError'
import { Curtain } from '~ui/Curtain'
import { compose, withSuspense } from '~/shared/lib/react'
import { pathKeys } from '~/shared/lib/react-router'
import mainLayout from '../layouts/main-layout'
import { testPageRoute } from '~/pages/test/config/route'

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const routers = createBrowserRouter([
  {
    errorElement: createElement(BubbleError),
    children: [
      {
        element: createElement(enhance(mainLayout)),
        children: [homePageRoute, testPageRoute]
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