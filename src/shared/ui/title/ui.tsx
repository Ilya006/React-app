import clsx from 'clsx'
import { Link, LinkProps } from 'react-router-dom'
import s from './styles.module.scss'

import type { ElementType, ReactNode } from 'react'

type BaseTitleProps<T extends ElementType> = {
  children: ReactNode
  as?: T
  to: any,
  className?: string
  size?: 'small' | 'medium' | 'large' | 'xl'
}

export type TitleProps<T extends ElementType> = T extends typeof Link
  ? BaseTitleProps<T> & LinkProps
  : BaseTitleProps<T>

const defaultElement: ElementType = 'h2'

export function Title<T extends ElementType = typeof defaultElement>(
  props: TitleProps<T>
) {
  const { as, size = 'large', className, children, ...restProps } = props
  const Element = as || defaultElement

  return (
    <Element className={clsx(s.title, s[size], className)} {...restProps}>
      {children}
    </Element>
  )
}
