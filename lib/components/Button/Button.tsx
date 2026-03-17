import { default as NextLink, type LinkProps } from 'next/link'
import { forwardRef, PropsWithChildren, ReactNode, Ref } from 'react'
import { AriaButtonProps } from 'react-aria'
import { Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components'

import cn from '../../tools/cn'
import { ArrowDownIcon, ArrowRightIcon, ExportIcon } from '../../assets/icons'
import { useComponentLibraryContext } from '../providers/ComponentLibraryProvider'
import Spinner from '../Spinner/Spinner'

/**
 * Both bratislava.sk and konto.bratislava.sk consume this component.
 * Each app provides its own LinkComponent (e.g. MLink wrapping next/link)
 * via the context provider in _app.tsx.
 */

type ButtonOrIconButton =
  | {
      icon: ReactNode
      'aria-label': string
      startIcon?: never
      endIcon?: never
      children?: never
    }
  | ({
      icon?: never
      startIcon?: ReactNode
      endIcon?: ReactNode
    } & PropsWithChildren)

type ButtonBase = {
  // When adding a new variant, include it also in is...Variant booleans below

  variant?:
    | 'unstyled'
    | 'icon-wrapped'
    | 'icon-wrapped-negative-margin'
    | 'solid'
    | 'solid-inverted'
    | 'outline'
    | 'outline-soft'
    | 'plain'
    | 'negative-solid'
    | 'negative-plain'
    | 'link'
    | 'link-inverted'
  size?: 'responsive' | 'large' | 'small'
  className?: string
  fullWidth?: boolean
  fullWidthMobile?: boolean
  isLoading?: boolean
  loadingText?: string
} & ButtonOrIconButton

export type ButtonButtonProps = Omit<RACButtonProps, 'className' | 'style'> &
  ButtonBase & {
    href?: never
    target?: never
    hasLinkIcon?: never
    analyticsProps?: never
  }

export type LinkAnalyticsProps = { id: string }

export type ButtonAnchorProps = Omit<AriaButtonProps<'a'>, 'children'> &
  ButtonBase &
  Pick<LinkProps, 'replace' | 'prefetch'> & {
    target?: '_blank' | '_self' | '_parent' | '_top'
    stretched?: boolean
    hasLinkIcon?: boolean
    analyticsProps?: LinkAnalyticsProps
  }

export type ButtonProps = ButtonButtonProps | ButtonAnchorProps

/**
 * Figma: https://www.figma.com/design/17wbd0MDQcMW9NbXl6UPs8/DS--Component-library?node-id=16846-52741
 */

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      isDisabled,
      variant = 'unstyled',
      size = 'responsive',
      icon,
      startIcon,
      endIcon,
      hasLinkIcon = true,
      fullWidth,
      fullWidthMobile,
      isLoading,
      loadingText,
      ...rest
    },
    ref,
  ) => {
    const { LinkComponent } = useComponentLibraryContext()
    const Link = LinkComponent || NextLink

    const isLoadingOrDisabled = isLoading || isDisabled

    const isSolidVariant =
      variant === 'solid' || variant === 'negative-solid' || variant === 'solid-inverted'
    const isOutlineVariant = variant === 'outline' || variant === 'outline-soft'
    const isSolidOrOutlineVariant = isSolidVariant || isOutlineVariant
    const isPlainVariant = variant === 'plain' || variant === 'negative-plain'
    const isIconWrappedVariant =
      variant === 'icon-wrapped' || variant === 'icon-wrapped-negative-margin'
    const isIconButton = Boolean(icon)
    const isLinkVariant = variant === 'link' || variant === 'link-inverted'

    /* TODO
     * - border should render inside button, not outside
     */
    const styles = cn(
      'base-focus-ring',
      '[&_svg]:shrink-0',
      {
        // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345
        'after:absolute after:inset-0': 'stretched' in rest && rest.stretched,

        'w-full': fullWidth,
        'w-full md:w-fit': fullWidthMobile,
        'w-fit': !fullWidth && !fullWidthMobile,
      },
      variant === 'unstyled'
        ? ''
        : cn(
            'inline-flex h-auto items-center justify-center gap-2 transition',

            {
              // text size and weight
              'font-semibold': true,
              'text-size-button-default lg:text-size-button-large': size === 'responsive',
              'text-size-button-large lg:text-size-button-large': size === 'large',
              'text-size-button-default lg:text-size-button-default': size === 'small',

              // svg icons
              '[&>svg]:size-5 [&>svg]:lg:size-6': size === 'responsive',
              '[&>svg]:size-5': size === 'small',
              '[&>svg]:size-6': size === 'large',

              // rounded corners (links recieve rounded corners so their focus ring is rounded similar to buttons)
              'rounded-lg': !isLinkVariant,
              'rounded-xs': isLinkVariant,

              // link styles
              'font-medium underline underline-offset-2 max-lg:gap-1': isLinkVariant,

              // disabled
              'opacity-50': isDisabled,

              // border width
              border: isSolidOrOutlineVariant,

              // padding — link variants
              'p-0': isLinkVariant,

              // padding — icon-wrapped variant
              'p-2 outline-offset-0': isIconButton && isIconWrappedVariant,
              '-m-2': isIconButton && variant === 'icon-wrapped-negative-margin',

              // padding — solid and outlined variants
              'px-4 py-2 lg:py-3':
                size === 'responsive' && !isIconButton && isSolidOrOutlineVariant,
              'px-4 py-2': size === 'small' && !isIconButton && isSolidOrOutlineVariant,
              'px-4 py-3': size === 'large' && !isIconButton && isSolidOrOutlineVariant,

              // padding — solid and outlined variants with "icon"
              'p-2.5 lg:p-3': size === 'responsive' && isIconButton && isSolidOrOutlineVariant,
              'p-2.5': size === 'small' && isIconButton && isSolidOrOutlineVariant,
              'p-3': size === 'large' && isIconButton && isSolidOrOutlineVariant,

              // padding — plain variants
              'px-2 py-1 lg:px-3 lg:py-2': size === 'responsive' && !isIconButton && isPlainVariant,
              'px-2 py-1': size === 'small' && !isIconButton && isPlainVariant,
              'px-3 py-2': size === 'large' && !isIconButton && isPlainVariant,

              // padding — plain variants with "icon"
              'p-1.5 lg:p-2': size === 'responsive' && isIconButton && isPlainVariant,
              'p-1.5': size === 'small' && isIconButton && isPlainVariant,
              'p-2': size === 'large' && isIconButton && isPlainVariant,

              // colors - bg, border, content - variant solid (figma: boxed primary)
              'border-border-active-primary-default bg-background-active-primary-default text-content-active-primary-inverted-default':
                variant === 'solid',
              'hover:border-border-active-primary-hover hover:bg-background-active-primary-hover hover:text-content-active-primary-inverted-hover active:border-border-active-primary-pressed active:bg-background-active-primary-pressed active:text-content-active-primary-inverted-pressed':
                variant === 'solid' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant solid-inverted (figma: boxed primary inverted)
              'ring-offset-border-active-primary-default ring-white': variant === 'solid-inverted',
              'border-border-active-primary-inverted-default bg-background-active-primary-inverted-default text-content-active-primary-default':
                variant === 'solid-inverted',
              'hover:border-border-active-primary-inverted-hover hover:bg-background-active-primary-inverted-hover hover:text-content-active-primary-hover active:border-border-active-primary-inverted-pressed active:bg-background-active-primary-inverted-pressed active:text-content-active-primary-pressed':
                variant === 'solid-inverted' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant outline (figma: boxed secondary)
              'border-border-active-secondary-default text-content-active-primary-default':
                variant === 'outline',
              'hover:border-border-active-secondary-hover hover:text-content-active-primary-hover active:border-border-active-secondary-pressed active:text-content-active-primary-pressed':
                variant === 'outline' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant outline-soft (figma: boxed tertiary)
              'border-border-active-tertiary-default text-content-active-tertiary-default':
                variant === 'outline-soft',
              'hover:border-border-active-tertiary-hover hover:text-content-active-tertiary-hover active:border-border-active-tertiary-pressed active:text-content-active-tertiary-pressed':
                variant === 'outline-soft' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant plain (figma: plain default)
              'bg-background-active-primary-soft-inverted-default text-content-active-primary-default':
                variant === 'plain',
              'hover:bg-background-active-primary-soft-hover hover:text-content-active-primary-hover active:bg-background-active-primary-soft-pressed active:text-content-active-primary-pressed':
                variant === 'plain' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant negative-solid
              'border-border-error bg-background-error-default text-white':
                variant === 'negative-solid',
              'hover:border-border-error-hover hover:bg-background-error-hover active:border-border-error-pressed active:bg-background-error-pressed':
                variant === 'negative-solid' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant negative-plain
              'text-content-error-default': variant === 'negative-plain',
              'hover:bg-background-error-soft-default hover:text-content-error-hover active:bg-background-error-soft-pressed active:text-content-error-pressed':
                variant === 'negative-plain' && !isLoadingOrDisabled,

              // colors - bg, border, content - variant link

              'text-content-active-primary-default': variant === 'link',
              'hover:text-content-active-primary-hover active:text-content-active-primary-pressed':
                variant === 'link' && !isDisabled,

              // colors - bg, border, content - variant link-inverted

              'text-content-active-primary-inverted-default': variant === 'link-inverted',
              'hover:text-content-active-primary-inverted-hover': variant === 'link-inverted',
              'active:text-content-active-primary-inverted-pressed':
                variant === 'link-inverted' && !isLoadingOrDisabled,
            },
          ),
      className,
    )

    if (rest.href) {
      const isExternal = rest.href.startsWith('http')
      const isAnchor = rest.href.startsWith('#') && rest.href !== '#'
      const linkIcon = hasLinkIcon ? (
        isExternal ? (
          <ExportIcon />
        ) : isAnchor ? (
          <ArrowDownIcon />
        ) : (
          <ArrowRightIcon />
        )
      ) : null

      return (
        <Link
          href={rest.href}
          target={isExternal ? '_blank' : '_self'}
          ref={ref as Ref<HTMLAnchorElement>}
          className={styles}
          analyticsProps={rest.analyticsProps}
          {...rest}
        >
          {startIcon}
          {icon ?? children}
          {linkIcon ?? endIcon}
        </Link>
      )
    }

    return (
      <RACButton
        ref={ref as Ref<HTMLButtonElement>}
        isDisabled={isLoadingOrDisabled}
        className={styles}
        {...rest}
      >
        {!isLoading && startIcon}
        {isLoading ? (
          <>
            {loadingText}
            <Spinner size="sm" />
          </>
        ) : (
          (icon ?? children)
        )}
        {!isLoading && endIcon}
      </RACButton>
    )
  },
)

export default Button
