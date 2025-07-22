import { Outlet, redirect, RouteObject} from 'react-router-dom'
import { page404Route } from '~/pages/page-404'
import { homePageRoute } from '~/pages/home'
import { BubbleError } from '~ui/BubbleError'
import { pathKeys } from '~/shared/lib/react-router'
import { MainLayout } from '../layouts/main-layout'
import { testPageRoute } from '~/pages/test/config/route'

export const routers: RouteObject[] = ([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <MainLayout />,
        children: [homePageRoute, testPageRoute]
      },
      {
        element: <Outlet />,
        children: [page404Route]
      },
      {
        path: '*',
        loader: async () => redirect(pathKeys.page404())
      }
    ]
  }
])