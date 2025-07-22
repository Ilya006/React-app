import {compose, withSuspense} from "~/shared/lib/react";
import {Curtain} from "~ui/Curtain";
import {RouteObject} from "react-router-dom";
import {pathKeys} from "~/shared/lib/react-router";
import {createElement, lazy} from "react";

const Page404 = lazy(() =>
  import('./ui').then(module => ({
    default: module.Page404
  }))
)

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const page404Route: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(enhance(Page404))
}