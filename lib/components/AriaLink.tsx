import { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import { useLink } from 'react-aria'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType } from '../types/linkTypes'

const AriaLinkAnchor = forwardRef<HTMLAnchorElement | undefined, AriaLinkType>(
  ({ children, className, ...restProps }, ref) => {
    const anchorRef = useRef<HTMLAnchorElement>(null)
    // We are using useImperativeHandle here to expose anchorRef but not necessarily force user to pass it if not needed from outside
    useImperativeHandle(ref, () => anchorRef?.current ?? undefined)

    const { linkProps } = useLink({ ...restProps }, anchorRef)

    const { Link } = useContext(ComponentLibraryEnvironmentContext)

    if (Link) {
      return (
        <Link {...linkProps} {...restProps} className={className}>
          {children}
        </Link>
      )
    }

    return null
  },
)

export default AriaLinkAnchor
