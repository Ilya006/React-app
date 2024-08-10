import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import s from './guest.layout.module.css'

export function GuestLayout() {
  return (
    <div className={ s.layout }>
      <main className={ s.main }>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  )
}