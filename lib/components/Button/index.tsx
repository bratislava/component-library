import React from 'react'
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components'

interface ButtonProps extends AriaButtonProps {
  label: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  disabled,
  ...restProps
}) => {
  return (
    <AriaButton {...restProps} className={className}>
      {label}
    </AriaButton>
  )
}
