import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { compose, withSuspense } from '../../shared/lib/react';
import { Curtain } from '../../shared/ui/Curtain';
import AlbumsPage from './albums-page.lazy';
import { pathKeys } from '../../shared/lib/react-router';

const enhance = compose((component) => 
  withSuspense(component, { FallbackComponent: Curtain })
)

export const albumsPageRoute: RouteObject = {
  path: pathKeys.albums.root(),
  element: createElement(enhance(AlbumsPage))
}