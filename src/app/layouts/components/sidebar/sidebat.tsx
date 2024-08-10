import { NavLink } from 'react-router-dom'
import s from './sidebar.module.css'
import { pathKeys } from '../../../../shared/lib/react-router'

export function Sidebar() {
  return (
    <aside className={ s.aside }>
      <h2 className={ s.logo }>Logo &#129299;</h2>
      
      <nav className={ s.nav }>
        <ul className={ s.list }>
          <li className={ s.item }>
            <NavLink to={ pathKeys.home() }>Home</NavLink>
          </li>
          <li className={ s.item }>
            <NavLink to={ pathKeys.about() }>About</NavLink>
          </li>
          <li className={ s.item }>
            <NavLink to={ pathKeys.contact() }>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}