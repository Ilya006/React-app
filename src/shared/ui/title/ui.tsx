import clsx from 'clsx'
import s from './styles.module.scss'

import type { ElementType, ReactNode } from 'react'

interface TitleProps {
  children: ReactNode,
  as?: ElementType,
  className?: string,
  size?: 'small' | 'medium' | 'large' | 'xl'
}

const defaultElement: ElementType = 'h1'

export function Title(props: TitleProps) {
  const { as, size = 'large', className, children, ...restProps } = props
  const Element = as || defaultElement

  return (
    <Element className={clsx(s.title, s[size], className)} {...restProps}>
      {children}
    </Element>
  )
}