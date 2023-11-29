import cx from 'classnames'

import CloseIcon from './icons/CloseIcon'
import ErrorIcon from './icons/ErrorIcon'
import InfoIcon from './icons/InfoIcon'
import SuccessIcon from './icons/SuccessIcon'
import WarningIcon from './icons/WarningIcon'

type AlertButtons = {
  title: string
  handler: () => void
}
type AlertTypeType = 'error' | 'success' | 'info' | 'warning'
type AlertVariantType = 'basic' | 'message'

type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<AlertButtons>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends AlertButtons[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & {
  [Symbol.iterator]: () => IterableIterator<ArrayItems<T>>
}

const getAlertContainerStyle = (
  type: AlertTypeType,
  variant: AlertVariantType,
  solid?: boolean,
  className?: string,
) => {
  return cx(
    'flex w-full max-w-[480px] box-border justify-between rounded-lg px-3 lg:px-5',
    className,
    {
      'text-gray-800 flex-col lg:py-4 py-3': variant === 'message',
      'bg-negative-100': type === 'error' && !solid,
      'bg-success-50': type === 'success' && !solid,
      'bg-gray-100': type === 'info' && !solid,
      'bg-warning-50': type === 'warning' && !solid,

      'text-negative-700': type === 'error' && !solid && variant !== 'message',
      'text-success-700': type === 'success' && !solid && variant !== 'message',
      'text-gray-700': type === 'info' && !solid && variant !== 'message',
      'text-warning-700': type === 'warning' && !solid && variant !== 'message',

      'lg:py-4 p-3 items-center': variant === 'basic',
      'text-gray-0': solid,
      'bg-negative-700': type === 'error' && solid,
      'bg-success-700': type === 'success' && solid,
      'bg-gray-700': type === 'info' && solid,
      'bg-warning-700': type === 'warning' && solid,
    },
  )
}

type AlertBase = {
  type: AlertTypeType
  message: string
  variant?: AlertVariantType
  solid?: boolean
  content?: string
  close?: () => void
  buttons?: FixedLengthArray<[AlertButtons, AlertButtons]>
  className?: string
}

/** Design reference for Alert component: https://www.figma.com/file/17wbd0MDQcMW9NbXl6UPs8/DS-ESBS%2BBK%3A-Component-library?type=design&node-id=10-214&mode=design&t=tqmeXQ42CfF2mbPP-0 */
const Alert = ({
  solid = false,
  close,
  type,
  variant = 'basic',
  content,
  message,
  className,
  ...rest
}: AlertBase) => {
  const icons = {
    error: <ErrorIcon solid={solid} />,
    success: <SuccessIcon solid={solid} />,
    info: <InfoIcon solid={solid} />,
    warning: <WarningIcon solid={solid} />,
  }

  const alertContainer = getAlertContainerStyle(type, variant, solid, className)

  const contentStyle = cx('w-full box-border text-base font-normal', {
    'text-default': variant === 'basic',
    'text-default font-semibold': variant === 'message',
    'text-gray-0': solid,
    'text-gray-700': !solid,
  })

  const extraButtonStyle = cx(
    'text-default font-medium underline underline-offset-4 bg-transparent cursor-pointer border-0 text-base font-medium',
    {
      'text-negative-700': type === 'error' && !solid,
      'text-success-700': type === 'success' && !solid,
      'text-gray-700': type === 'info' && !solid,
      'text-warning-700': type === 'warning' && !solid,
      'text-gray-0': solid,
    },
  )

  return variant === 'basic' ? (
    <div className={alertContainer}>
      <div className="flex items-center gap-[14px]">
        <span className="flex min-w-[22px] justify-center">{icons[type]}</span>
        <div className={contentStyle}>{message}</div>
      </div>
      {close && (
        <span className="flex h-6 w-6 items-center justify-center">
          <CloseIcon onClick={close} solid={solid} type={type} />
        </span>
      )}
    </div>
  ) : (
    <div className={alertContainer}>
      <div className="flex flex-row items-center gap-[14px]">
        <span className="flex min-w-[22px] justify-center">{icons[type]}</span>
        <div className={contentStyle}>{message}</div>
      </div>
      <div
        className={cx('text-default mt-2 box-border w-full pl-9 text-base font-normal', {
          'text-gray-0': solid,
          'text-gray-700': !solid,
        })}
      >
        {content}
      </div>
      {rest.buttons && (
        <div className="mt-3 flex w-full gap-5 pl-9 lg:mt-5">
          <button type="button" className={extraButtonStyle} onClick={rest.buttons[0].handler}>
            {rest.buttons[0].title}
          </button>
          <button type="button" className={extraButtonStyle} onClick={rest.buttons[1].handler}>
            {rest.buttons[1].title}
          </button>
        </div>
      )}
    </div>
  )
}

export default Alert
