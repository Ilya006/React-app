import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { pathKeys } from '../../shared/lib/react-router';
import { compose, withSuspense } from '../../shared/lib/react';
import { Curtain } from '../../shared/ui/Curtain';
import HomePage from './home-page.lazy'
import { instance } from '../../shared/api/base';
import axios from 'axios';


const enhace = compose((component) =>
  withSuspense(component, { FallbackComponent: Curtain })
)

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(enhace(HomePage))
}

export async function fetchPosts() {
  try {
    const { data } = await instance.get('/posts/1')
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    } else {
      throw error
    }
  }
}

export function fetchFake({ test }: {test: string}) {
  console.log(test)
  
  return new Promise((resolve) => {
    setTimeout(() => resolve('DoneSata'), 2000)
  })
}