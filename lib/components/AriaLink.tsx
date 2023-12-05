import { forwardRef, RefObject, useContext, useImperativeHandle, useRef } from 'react'
import { useLink } from 'react-aria'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType } from '../types/linkTypes'

const AriaLinkAnchor = forwardRef<HTMLAnchorElement | undefined, AriaLinkType>(
  ({ children, className, ...restProps }, ref) => {
    const { linkProps } = useLink({ ...restProps }, ref as RefObject<HTMLAnchorElement>)

    const { Link } = useContext(ComponentLibraryEnvironmentContext)

    const anchorRef = useRef<HTMLAnchorElement>(null)
    // We are using useImperativeHandle here to expose anchorRef but not necessarily force user to pass it if not needed from outside
    useImperativeHandle(ref, () => anchorRef?.current ?? undefined)

    return (
      <Link {...linkProps} {...restProps} className={className} ref={anchorRef}>
        {children}
      </Link>
    )
  },
)

export default AriaLinkAnchor
