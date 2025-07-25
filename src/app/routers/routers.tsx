import { Outlet, redirect, RouteObject} from 'react-router-dom'
import { page404Route } from '~/pages/page-404'
import { homePageRoute } from '~/pages/home'
import { BubbleError } from '~ui/BubbleError'
import { pathKeys } from '~/shared/lib/react-router'
import { MainLayout } from '../layouts/main-layout'

export const routers: RouteObject[] = ([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <MainLayout />,
        children: [homePageRoute]
      },
      {
        element: <Outlet />,
        children: [page404Route]
      },
      {
        path: '*',
        loader: () => redirect(pathKeys.page404())
      }
    ]
  }
])