import React, { forwardRef, RefObject, useContext } from 'react'
import { useLink } from 'react-aria'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType } from '../types/linkTypes'

const AriaLinkAnchor: React.FC<AriaLinkType> = forwardRef<HTMLAnchorElement, AriaLinkType>(
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

export default AriaLinkAnchor
