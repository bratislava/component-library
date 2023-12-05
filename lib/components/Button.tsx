/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
import { forwardRef, PropsWithChildren, ReactNode, RefObject, useContext } from 'react'
import { AriaButtonProps } from 'react-aria'
import { Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { ArrowRightIcon, ExportIcon } from '../assets'
import MLink from '../localComponents/MLink'
import Spinner from '../localComponents/Spinner'
import ComponentLibraryEnvironmentContext from '../tools/ComponentLibraryEnvironmentContext'
import { PlausibleProps } from '../types/linkTypes'

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
  variant?:
    | 'unstyled'
    | 'icon-wrapped'
    | 'icon-wrapped-negative-margin'
    | 'category-solid'
    | 'category-outline'
    | 'category-plain'
    | 'black-solid'
    | 'black-outline'
    | 'black-plain'
    | 'negative-solid'
    | 'negative-plain'
    | 'black-link'
    | 'category-link'
  size?: 'responsive' | 'large' | 'small'
  className?: string
  fullWidth?: boolean
  fullWidthMobile?: boolean
  isLoading?: boolean
  isLoadingText?: string
  stretched?: boolean
  onPointerEnter?: (event: React.PointerEvent) => void
  onPointerLeaver?: (event: React.PointerEvent) => void
} & ButtonOrIconButton

export type ButtonProps = Omit<RACButtonProps, 'className' | 'style'> &
  ButtonBase & {
    href?: never
    target?: never
    hasLinkIcon?: never
    plausibleProps?: never
  }

export type AnchorProps = Omit<AriaButtonProps<'a'>, 'children'> &
  ButtonBase & {
    stretched?: boolean
    hasLinkIcon?: boolean
    plausibleProps?: PlausibleProps
  }

export type PolymorphicProps = ButtonProps | AnchorProps

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, PolymorphicProps>(
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
      hasLinkIcon,
      fullWidth,
      fullWidthMobile,
      isLoading,
      isLoadingText,
      href,
      plausibleProps,
      stretched,
      ...rest
    },
    ref,
  ) => {
    const isLoadingOrDisabled = isLoading || isDisabled

    const isSolidVariant = variant.endsWith('-solid')
    const isOutlineVariant = variant.endsWith('-outline')
    const isSolidOrOutlineVariant = isSolidVariant || isOutlineVariant
    const isPlainVariant = variant.endsWith('-plain')
    const isLinkVariant = variant.endsWith('-link')
    const isIconWrappedVariant =
      variant === 'icon-wrapped' || variant === 'icon-wrapped-negative-margin'
    const isIconButton = Boolean(icon)

    const { plausible } = useContext(ComponentLibraryEnvironmentContext)

    const handleLinkClick = () => {
      if (plausible && plausibleProps) {
        plausible('Link Clicked', { id: plausibleProps?.id })
      }
    }

    /* TODO
     *   - examine why `text-button` interferes with `text-[color]` and therefore is sometimes ignored
     *   - border should render inside button, not outside
     *   - focus text color for 'culture' and 'social' category should be -800
     */
    const styles =
      variant === 'unstyled'
        ? className ?? ''
        : twMerge(
            // TODO text-button interferes with text-[color], as quickfix we set size and color here by arbitrary values
            'inline-flex h-auto items-center justify-center gap-2 text-[1rem] font-semibold leading-[1.5rem] transition',

            // we use isFocusVisible to show focus ring only on keyboard navigation
            // it's recommended to remove default outline and use custom styling as ring: https://tailwindcss.com/docs/outline-style#removing-outlines
            'outline-none ring-offset-2 focus-visible:ring',
            // we change rounded corners for link focus ring
            isLinkVariant ? 'rounded-sm max-lg:gap-1' : 'rounded-lg',

            // NOTE: there are some style overrides for link variants below in "twMerge"

            isLinkVariant && 'font-medium underline',

            // disabled or loading
            isLoadingOrDisabled && 'opacity-50',

            // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345
            stretched && 'after:absolute after:inset-0',

            // width or fullwidth
            fullWidth && 'w-full',
            fullWidthMobile && 'w-full md:w-fit',
            !fullWidth && !fullWidthMobile && 'w-fit',

            // border width
            isSolidOrOutlineVariant && 'border-2',

            // padding - link variants
            isLinkVariant && 'p-0',

            // padding - icon-wrapped variant
            isIconButton && isIconWrappedVariant && 'p-2 outline-offset-0',
            isIconButton && variant === 'icon-wrapped-negative-margin' && '-m-2',

            // padding - filled and outlined variants

            size === 'responsive' &&
              !isIconButton &&
              isSolidOrOutlineVariant &&
              'px-4 py-2 lg:py-3',
            size === 'small' && !isIconButton && isSolidOrOutlineVariant && 'px-4 py-2',
            size === 'large' && !isIconButton && isSolidOrOutlineVariant && 'px-4 py-3',

            // padding - filled and outlined variants with "icon"
            size === 'responsive' && isIconButton && isSolidOrOutlineVariant && 'p-2.5 lg:p-3',
            size === 'small' && isIconButton && isSolidOrOutlineVariant && 'p-2.5',
            size === 'large' && isIconButton && isSolidOrOutlineVariant && 'p-3',

            // padding - plain variants
            size === 'responsive' && !isIconButton && isPlainVariant && 'px-2 py-1 lg:px-3 lg:py-2',
            size === 'small' && !isIconButton && isPlainVariant && 'px-2 py-1',
            size === 'large' && !isIconButton && isPlainVariant && 'px-3 py-2',

            // padding - plain variants with "icon"
            size === 'responsive' && isIconButton && isPlainVariant && 'p-1.5 lg:p-2',
            size === 'small' && isIconButton && isPlainVariant && 'p-1.5',
            size === 'large' && isIconButton && isPlainVariant && 'p-2',

            // colors - bg, border, text - idle & focus
            variant === 'category-solid' &&
              'border-category-700 bg-category-700 text-font-contrast pressed:border-category-800 pressed:bg-category-800',

            variant === 'category-outline' &&
              'border-category-700 bg-transparent text-gray-700 pressed:border-category-800 pressed:text-gray-800',
            variant === 'black-solid' &&
              'border-gray-700 bg-gray-700 text-white pressed:border-gray-800 pressed:bg-gray-800',
            variant === 'black-outline' &&
              'border-gray-200 bg-transparent text-gray-700 pressed:border-gray-300 pressed:text-gray-800',
            variant === 'negative-solid' &&
              'border-negative-700 bg-negative-700 text-white pressed:border-negative-800 pressed:bg-negative-800',

            variant === 'category-plain' &&
              'text-category-700 pressed:bg-category-200 pressed:text-category-800',
            variant === 'black-plain' && 'text-gray-700 pressed:bg-gray-200 pressed:text-gray-800',
            variant === 'negative-plain' &&
              'text-negative-700 pressed:bg-negative-200 pressed:text-negative-800',

            variant === 'category-link' && 'text-category-700 pressed:text-category-800',
            variant === 'black-link' && 'text-gray-700 pressed:text-gray-800',

            // colors:hover - bg, border, text
            variant === 'category-solid' && 'hover:border-category-600 hover:bg-category-600',
            variant === 'category-outline' && 'text-gray-600 hover:border-category-600',
            variant === 'category-plain' && 'hover:bg-category-100 hover:text-category-600',

            variant === 'black-solid' && 'hover:border-gray-600 hover:bg-gray-600',
            variant === 'black-outline' && 'hover:border-gray-200 hover:text-gray-600',
            variant === 'black-plain' && 'hover:bg-gray-100 hover:text-gray-600',

            variant === 'negative-solid' && 'hover:border-negative-600 hover:bg-negative-600',
            variant === 'negative-plain' && 'hover:bg-negative-100 hover:text-negative-600',

            variant === 'category-link' && 'hover:text-category-600',
            variant === 'black-link' && 'hover:text-gray-600',

            // svg icons
            size === 'responsive' && '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:lg:h-6 [&>svg]:lg:w-6',
            size === 'small' && '[&>svg]:h-5 [&>svg]:w-5',
            size === 'large' && '[&>svg]:h-6 [&>svg]:w-6',

            className,
          )

    if (href) {
      const isExternal = href.startsWith('http')
      const linkIcon = hasLinkIcon ? isExternal ? <ExportIcon /> : <ArrowRightIcon /> : null

      return (
        <MLink
          href={href}
          ref={ref as RefObject<HTMLAnchorElement>}
          onClick={() => {
            handleLinkClick()
          }}
          className={styles}
          {...rest}
        >
          {startIcon}
          {icon ?? children}
          {linkIcon ?? endIcon}
        </MLink>
      )
    }

    return (
      <RACButton
        ref={ref as RefObject<HTMLButtonElement>}
        isDisabled={isLoadingOrDisabled}
        className={styles}
        {...rest}
      >
        {!isLoading && startIcon}
        {isLoading ? (
          <>
            {isLoadingText}
            <Spinner size="sm" />
          </>
        ) : (
          icon ?? children
        )}
        {!isLoading && endIcon}
      </RACButton>
    )
  },
)

export default Button
