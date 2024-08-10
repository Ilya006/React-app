import { NavLink } from 'react-router-dom'
import s from './menu.module.css'

export function Menu() {
  return (
    <nav className={s.navbar}>
      <NavLink style={({ isActive, isPending }) => ({ color: isActive ? 'red' : isPending ? 'green' : 'blue' })} to='/'>Home</NavLink>
      <NavLink style={({ isActive, isPending }) => ({ color: isActive ? 'red' : isPending ? 'green' : 'blue' })} to='/about'>about</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/contact/prog'>Contact progectId</NavLink>
    </nav>
  )
}