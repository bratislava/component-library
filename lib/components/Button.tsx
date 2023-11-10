import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components'

type ButtonType = {
  label: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

type ButtonProps = ButtonType & AriaButtonProps

const Button = ({ label, onClick, className, disabled, ...restProps }: ButtonProps) => (
  <AriaButton {...restProps} className={className}>
    {label}
  </AriaButton>
)

export default Button
