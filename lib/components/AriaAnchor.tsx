import React, { forwardRef, RefObject, useContext } from 'react'
import { useLink } from 'react-aria'

import EnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'

type AnchorType = {
  children: React.ReactNode
  className?: string
  forwardedRef?: React.Ref<HTMLAnchorElement>
  href: string
}

const AriaAnchor = forwardRef<HTMLAnchorElement, AnchorType>(
  ({ children, className, forwardedRef, ...restProps }, ref) => {
    const { linkProps } = useLink({ ...restProps }, ref as RefObject<HTMLAnchorElement>)

    const { Link } = useContext(EnvironmentContext)

    return (
      <Link
        {...linkProps}
        {...restProps}
        className={className}
        ref={forwardedRef as RefObject<HTMLAnchorElement>}
      >
        {children}
      </Link>
    )
  },
)

export default AriaAnchor
