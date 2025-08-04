import {useRoutes} from 'react-router-dom'
import {routers} from '~/app/routers'

import './styles.css'

export function App() {
  return useRoutes(routers)
}
