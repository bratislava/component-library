import { forwardRef, useContext } from 'react'
import { useLink } from 'react-aria'
import { twMerge } from 'tailwind-merge'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType, LinkPlausibleProps } from '../types/linkTypes'

export type LinkProps = {
  variant?: 'unstyled' | 'underlineOnHover' | 'underlined' | 'underlined-medium'
  plausibleProps?: { eventName: string; props: LinkPlausibleProps }
  stretched?: boolean
}

type MLinkProps = LinkProps & AriaLinkType

const MLink = forwardRef<HTMLAnchorElement, MLinkProps>(
  (
    { href, children, className, variant = 'unstyled', stretched, plausibleProps, ...restProps },
    ref,
  ) => {
    const { linkProps } = useLink({ ...restProps }, ref as RefObject<HTMLAnchorElement>)
    const { Link, usePlausible } = useContext(ComponentLibraryEnvironmentContext)

    const plausible = usePlausible

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
      <Link
        {...linkProps}
        href={href}
        passHref
        ref={ref}
        {...restProps}
        className={styles}
        onClick={() => plausibleProps && plausible('Link click', { props: plausibleProps })}
      >
        {children}
      </Link>
    )
  },
)

export default MLink
