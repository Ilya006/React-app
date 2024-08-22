import { Link } from 'react-router-dom'
import MySvg from './assets/logo.svg?react'
import { pathKeys } from '../../lib/react-router'

export function Logo() {
  return (
    <Link to={pathKeys.home()}>
      <MySvg />
    </Link>
  )
}