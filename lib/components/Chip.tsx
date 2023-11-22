import cx from 'classnames'
import React from 'react'
import { Tag, TagProps } from 'react-aria-components'

type ChipProps = {
  variant?: 'large' | 'medium' | 'small'
  color?:
    | 'default'
    | 'blue'
    | 'brown'
    | 'green'
    | 'purple'
    | 'red'
    | 'yellow'
    | 'disabled'
    | 'orange'
  className?: string
  children?: React.ReactNode
}

type ChipType = ChipProps & TagProps

const Chip = ({
  children,
  color = 'default',
  variant = 'large',
  className,
  ...props
}: ChipType) => {
  const sizeVariants = {
    large: 'w-[55px] max-h-[32px] px-1.5 py-3 lg:w-[68px] lg:max-h-[44px] lg:x-2.5 lg:py-4',
    medium: 'w-[47px] max-h-[24px] px-0.5 py-2 lg:w-[55px] lg:max-h-[32px] lg:px-1.5 lg:py-3',
    small: 'w-[47px] max-h-[24px] px-0.5 py-2',
  }

  const colorVariants = {
    default: 'bg-white border-gray-300 text-gray-700 border-solid border-2',
    disabled: 'bg-white border-disabledOrHover text-disabledOrHover border-solid border-2',
    red: 'bg-main border-none text-white',
    green: 'bg-environment border-none text-white',
    blue: 'bg-transport border-none text-white',
    yellow: 'bg-social border-none text-gray-700',
    purple: 'bg-education border-none text-white',
    orange: 'bg-culture border-none text-gray-700',
    brown: '',
  }

  const style = cx(
    'box-border flex cursor-pointer items-center justify-center rounded-lg border-2 text-center transition-all duration-300 ease-in-out hover:border-disabledOrHover hover:bg-disabledOrHover hover:text-defaultBlack',
    sizeVariants[variant],
    className || '',
    colorVariants[color],

    {
      'text-default-responsive': variant === 'large',
      'text-size-p-small ': variant === 'medium' || 'small',
    },
    'selected:border-none selected:bg-defaultBlack selected:text-white',
  )

  return (
    <Tag {...props} className={style}>
      {children}
    </Tag>
  )
}

export default Chip
