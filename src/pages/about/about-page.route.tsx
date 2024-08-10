import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '../../shared/lib/react-router'
import { compose, withSuspense } from '../../shared/lib/react'
import { Curtain } from '../../shared/ui/Curtain'
import AboutPage from './about-page.lazy'

const enhance = compose((component) => withSuspense(component, { FallbackComponent: Curtain }))

export const aboutPageRoute: RouteObject = {
  path: pathKeys.about(),
  element: createElement(enhance(AboutPage))
}