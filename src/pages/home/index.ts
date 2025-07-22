import {RouteObject} from "react-router-dom";
import {pathKeys} from "~/shared/lib/react-router";
import {compose, withSuspense} from "~/shared/lib/react";
import {Curtain} from "~ui/Curtain";
import {lazy} from "react";

const HomePage = lazy(() =>
  import('./ui').then(module => ({
    default: module.HomePage
  }))
)

const enhance = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  Component: enhance(HomePage)
}