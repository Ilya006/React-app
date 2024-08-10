import { createElement } from 'react'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'
import { homePageRoute } from '../../pages/home'
import { aboutPageRoute } from '../../pages/about'
import { contactPageRoute } from '../../pages/contact'
import { page404Route } from '../../pages/page-404'
import { pathKeys } from '../../shared/lib/react-router'
import { compose, withSuspense } from '../../shared/lib/react'
import { Curtain } from '../../shared/ui/Curtain'
import { BubbleError } from '../../shared/ui/BubbleError'
import GuestLayout from '../layouts/guest-layout'
import UserLayout from '../layouts/user-layout'

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const routers = createBrowserRouter([
  {
    errorElement: createElement(BubbleError),
    children: [
      {
        element: createElement(enhance(GuestLayout)),
        children: [homePageRoute, aboutPageRoute]
      },
      {
        element: createElement(enhance(UserLayout)),
        children: [contactPageRoute]
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