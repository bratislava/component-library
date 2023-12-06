import cx from 'classnames'
import { forwardRef, useContext } from 'react'
import { useLink } from 'react-aria'
import { twMerge } from 'tailwind-merge'

import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { AriaLinkType } from '../types/linkTypes'

export type LinkProps = {
  variant?: 'unstyled' | 'underlineOnHover' | 'underlined' | 'underlined-medium'
  stretched?: boolean
  onClick?: (plausibleProps: { eventName: string; props: { id: string } }) => void
}

type MLinkProps = LinkProps & AriaLinkType

const MLink = forwardRef<HTMLAnchorElement, MLinkProps>(
  ({ href, children, className, variant = 'unstyled', stretched, onClick, ...rest }, ref) => {
    const { linkProps } = useLink({ href, ...rest }, ref as React.RefObject<HTMLAnchorElement>)
    const { Link } = useContext(ComponentLibraryEnvironmentContext)

    const styles = twMerge(
      cx('underline-offset-2', {
        'underline lg:no-underline lg:hover:underline': variant === 'underlineOnHover',
        // TODO solve hover color, currently we use opacity, so text can have any color, but it can cause some design or accessibility issues
        'underline hover:opacity-80': variant === 'underlined' || variant === 'underlined-medium',
        'font-medium': variant === 'underlined-medium',

        // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345
        'after:absolute after:inset-0': stretched,
      }),
      className,
    )

    if (Link) {
      return (
        <Link {...linkProps} href={href} passHref ref={ref} {...rest} className={styles}>
          {children}
        </Link>
      )
    }

    return null
  },
)

export default MLink
