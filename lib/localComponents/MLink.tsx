import { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import { useLink } from 'react-aria'
import { twMerge } from 'tailwind-merge'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType } from '../types/linkTypes'

export type LinkProps = {
  variant?: 'unstyled' | 'underlineOnHover' | 'underlined' | 'underlined-medium'
  // plausibleProps?: { eventName: string; props: LinkPlausibleProps }
  stretched?: boolean
  onClick?: (plausibleProps: { eventName: string; props: { id: string } }) => void
}

type MLinkProps = LinkProps & AriaLinkType

const MLink = forwardRef<HTMLAnchorElement | undefined, MLinkProps>(
  ({ href, children, className, variant = 'unstyled', stretched, onClick, ...rest }, ref) => {
    const { linkProps } = useLink({ href, ...rest }, ref as React.RefObject<HTMLAnchorElement>)
    const { Link } = useContext(ComponentLibraryEnvironmentContext)

    const anchorRef = useRef<HTMLAnchorElement>(null)
    // We are using useImperativeHandle here to expose anchorRef but not necessarily force the user to pass it if not needed from outside
    useImperativeHandle(ref, () => anchorRef?.current ?? undefined)

    const styles = twMerge(
      'underline-offset-2',
      variant === 'underlineOnHover' && 'underline lg:no-underline lg:hover:underline',
      // TODO solve hover color, currently we use opacity, so text can have any color, but it can cause some design or accessibility issues
      (variant === 'underlined' || variant === 'underlined-medium') && 'underline hover:opacity-80',
      variant === 'underlined-medium' && 'font-medium',
      stretched && 'after:absolute after:inset-0',

      // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345

      className,
    )

    return (
      <Link {...linkProps} href={href} passHref ref={anchorRef} {...rest} className={styles}>
        {children}
      </Link>
    )
  },
)

export default MLink
