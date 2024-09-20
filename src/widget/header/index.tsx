import { NavLink } from 'react-router-dom'
import { Logo } from '~ui/logo'
import { pathKeys } from '~/shared/lib/react-router'
import clsx from 'clsx'

import s from './header.module.css'

export function Header() {
  return (
    <header className={clsx(s.header, 'container')}>
      <nav className={s.nav}>
        <Logo />
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              end
              to={pathKeys.home()}
              className={({ isActive }) => isActive ? s.active : ''}
            >Главная</NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              end
              to={pathKeys.catalog()}
              className={({ isActive }) => isActive ? s.active : ''}
            >Каталог</NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              end
              to={'/test'}
              className={({ isActive }) => isActive ? s.active : ''}
            >Тест</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}