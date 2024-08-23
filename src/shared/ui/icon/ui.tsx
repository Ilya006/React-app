import clsx from 'clsx'
import type { SVGProps } from 'react'
import type { IconName } from './types'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: IconName
}

export function Icon(props: IconProps) {
  const { name, className, viewBox, ...otherProps} = props
  const [spriteName, iconName] = name.split('/')

  return (
    <svg
      aria-hidden
      className={clsx('icon', className)}
      focusable="false"
      viewBox={viewBox}
      {...otherProps}
    >
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  )
}