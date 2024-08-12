import { NavLink } from 'react-router-dom'
import { pathKeys } from '../../../../shared/lib/react-router'
import s from './header.module.css'

export function Header() {
  return (
    <header className={ s.header }>
      <h2 className={ s.logo }>Logo &#129299;</h2>

      <h2>Users</h2>

      <nav className={ s.nav }>
        <ul className={ s.list }>
          <li className={ s.item }>
            <NavLink to={ pathKeys.home() }>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}