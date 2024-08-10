import { createElement, lazy } from 'react'
import { createBrowserRouter, Outlet, redirect, useRouteError } from 'react-router-dom'
import { homePageRoute } from '../../pages/home'
import { aboutPageRoute } from '../../pages/about'
import { contactPageRoute } from '../../pages/contact'
import { page404Route } from '../../pages/page-404'
import { pathKeys } from '../../shared/lib/react-router'
import { compose, withSuspense } from '../../shared/lib/react'

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: LayoutLoading })
)

const GuestLayout = lazy(() => 
  import('./../layouts').then((module) => ({ 
    default: module.GuestLayout
  }))
)

const UserLayout = lazy(() => 
  import('./../layouts').then((module) => ({ 
    default: module.UserLayout
  }))
)

export const routers = createBrowserRouter([
  {
    errorElement: <BubbleError />,
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

function LayoutLoading() {
  return <h2>Loading...</h2>
}

function BubbleError() {
  const error = useRouteError()
  console.error(error)

  if (error) throw error
  return null
}