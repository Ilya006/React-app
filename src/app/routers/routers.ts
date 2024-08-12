import { createElement } from 'react'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'
import { homePageRoute } from '../../pages/home'
import { page404Route } from '../../pages/page-404'
import { usersPageRoute } from '../../pages/users'
import { albumsPageRoute } from '../../pages/albums'
import { pathKeys } from '../../shared/lib/react-router'
import { compose, withSuspense } from '../../shared/lib/react'
import { Curtain } from '../../shared/ui/Curtain'
import { BubbleError } from '../../shared/ui/BubbleError'
import MainLayout from '../layouts/main-layout'
import UsersLayout from '../layouts/users-layout'

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const routers = createBrowserRouter([
  {
    errorElement: createElement(BubbleError),
    children: [
      {
        element: createElement(enhance(MainLayout)),
        children: [homePageRoute, albumsPageRoute]
      },
      {
        element: createElement(enhance(UsersLayout)),
        children: [usersPageRoute]
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