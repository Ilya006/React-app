import { RouterProvider } from 'react-router-dom'
import { routers } from './routers'
import './styles/index.scss'

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
