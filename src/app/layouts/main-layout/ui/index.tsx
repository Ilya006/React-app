import { Outlet } from 'react-router-dom'
import { Header } from '~/widget/header'

export function MainLayout() {
  return (
    <div className={'app dark'}>
      <Header />
      <Outlet />
    </div>
  )
}