import { Typography } from '@lib/main'
import cx from 'classnames'
import { ReactNode } from 'react'

type WrapperProps = {
  title?: string
  children: ReactNode
  direction?: 'column' | 'row'
  noBorder?: boolean
}

export const Wrapper = ({ title, children, direction = 'row', noBorder }: WrapperProps) => {
  const wrapperClassNames = cx(
    'border-t-1 mb-10 flex flex-col border border-b-0 border-l-0 border-r-0 border-solid border-gray-800 pt-10',
    {
      'border-t-0': noBorder,
    },
  )

  const childrenClassNames = cx('flex gap-2', {
    'flex-col': direction === 'column',
    'flex-row': direction === 'row',
  })

  return (
    <div className={wrapperClassNames}>
      {title && (
        <Typography type="h2" id={title}>
          {title}
        </Typography>
      )}
      <div className={childrenClassNames}>{children}</div>
    </div>
  )
}
