import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import s from './guest.layout.module.css'

export function GuestLayout() {
  return (
    <div className={ s.layout }>
      <Sidebar />
      <main className={ s.main }>
        <Outlet />
      </main>
    </div>
  )
}