import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import s from './main.layout.module.css'

export function MainLayout() {
  return (
    <div className={ s.layout }>
      <Header />
      <main className={ s.main }>
        <Outlet />
      </main>
    </div>
  )
}