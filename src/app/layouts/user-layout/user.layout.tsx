import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import s from './user.layout.module.css'

export function UserLayout() {
  return (
    <div className={ s.layout }>
      <Header />
      <main className={ s.main }>
        <Outlet />
      </main>
    </div>
  )
}