import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import s from './users.layout.module.css'

export function UsersLayout() {
  return (
    <div className={ s.layout }>
      <Header />
      <main className={ s.main }>
        <Outlet />
      </main>
    </div>
  )
}