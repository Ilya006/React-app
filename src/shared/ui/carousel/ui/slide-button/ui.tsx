import { forwardRef } from 'react'
import clsx from 'clsx'
import { Icon } from '~/shared/ui/icon'
import s from './slide-button.module.css'

import type { ButtonHTMLAttributes } from 'react'

interface SlideBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const SlideBtn = forwardRef<HTMLButtonElement, SlideBtnProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <button
      ref={ref}
      className={clsx('btn-reset', s.btn, className)}
      {...restProps}
    >
      <Icon name="common/chevron" />
    </button>
  )
})