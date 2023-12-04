import { ComponentLibraryEnvironmentContext } from '@lib/main'
import React, { forwardRef, RefObject, useContext } from 'react'
import { useLink } from 'react-aria'

type Anchor = {
  children: React.ReactNode
  className?: string
  forwardedRef?: React.Ref<HTMLAnchorElement>
  href: string
}

/** Keepign this as an example component for environemnt context usage */
const AriaAnchor = forwardRef<HTMLAnchorElement, Anchor>(
  ({ children, className, forwardedRef, ...restProps }, ref) => {
    const { linkProps } = useLink({ ...restProps }, ref as RefObject<HTMLAnchorElement>)

    const { Link } = useContext(ComponentLibraryEnvironmentContext)

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
