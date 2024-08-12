import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import s from './main.layout.module.css'

export function MainLayout() {
  return (
    <div className={ s.layout }>
      <Sidebar />
      <main className={ s.main }>
        <Outlet />
      </main>
    </div>
  )
}