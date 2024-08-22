import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';
import { Curtain } from '../../shared/ui/Curtain';
import CatalogPage from './catalog-page.lazy'


const enhace = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const catalogPageRoute: RouteObject = {
  path: pathKeys.catalog(),
  element: createElement(enhace(CatalogPage))
}