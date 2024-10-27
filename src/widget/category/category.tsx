import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { Title } from '~/shared/ui/title'
import s from './category.module.scss'

import type { ElementType, ReactNode } from 'react'
import { TitleProps } from '~/shared/ui/title/ui'

interface CategoryProps {
  className: string,
  containerClass: string,
  children: ReactNode
}

export function Category(props: CategoryProps) {
  const { className, containerClass, children } = props

  return (
    <section className={clsx(s.section, className)}>
      <div className={ containerClass }>
        {children}
      </div>
    </section>
  )
}

function CategoryTitle<T extends ElementType = 'h2'>(props: TitleProps<T>) {
  const { children, to, ...restProps } = props
  const Component = to ? Link : 'h2'

  return (
    <Title as={Component} {...restProps}>
      {children}
    </Title>
  )
}