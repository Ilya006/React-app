import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';
import { Curtain } from '../../shared/ui/Curtain';
import Page404 from './page-404.lazy'

const enhace = compose((component) => 
  withSuspense(component, { FallbackComponent: Curtain })
)

export const page404Route: RouteObject = {
  path: pathKeys.page404(),
  element: createElement(enhace(Page404))
}