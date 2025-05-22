import { createElement, ElementType, forwardRef, HTMLAttributes, ReactNode } from 'react'

import cn from '../../tools/cn'
import { normalizeSkText } from './utils/normalizeSkText'

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: ElementType
  className?: string
  variant?:
    | 'h1-hero'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p-default'
    | 'p-large'
    | 'p-small'
    | 'p-tiny'
    | 'p-default-bold'
    | 'p-large-bold'
    | 'p-small-bold'
    | 'p-tiny-bold'
    | 'p-default-black'
    | 'p-large-black'
    | 'p-small-black'
    | 'p-tiny-black'
    | 'button-default'
    | 'button-large'
}

/**
 * Figma - Design system: https://www.figma.com/design/ctDKMhAPIjLUVNNmq430D4/DS--Foundations?node-id=59-21&m=dev
 * Figma - OLO: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=39-2452&p=f&m=dev
 */

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'p-default', children, as, className, ...rest }, forwardedRef) => {
    const variantElement = (
      {
        'h1-hero': 'h1',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        'p-default': 'p',
        'p-large': 'p',
        'p-small': 'p',
        'p-tiny': 'p',
        'p-default-bold': 'p',
        'p-large-bold': 'p',
        'p-small-bold': 'p',
        'p-tiny-bold': 'p',
        'p-default-black': 'p',
        'p-large-black': 'p',
        'p-small-black': 'p',
        'p-tiny-black': 'p',
        'button-default': 'span',
        'button-large': 'span',
      } as const
    )[variant]

    const classes = cn(
      'whitespace-pre-wrap', // TODO revisit if we want to apply it on all text
      'break-words', // TODO revisit if we want to apply it on all text
      {
        'text-size-h1-hero-r lg:text-size-h1-hero': variant === 'h1-hero',
        'text-size-h1-r lg:text-size-h1': variant === 'h1',
        'text-size-h2-r lg:text-size-h2': variant === 'h2',
        'text-size-h3-r lg:text-size-h3': variant === 'h3',
        'text-size-h4-r lg:text-size-h4': variant === 'h4',
        'text-size-h5-r lg:text-size-h5': variant === 'h5',
        'text-size-h6-r lg:text-size-h6': variant === 'h6',
        'text-size-p-default lg:text-size-p-large': variant.startsWith('p-large'),
        'text-size-p-default lg:text-size-p-default': variant.startsWith('p-default'),
        'text-size-p-small lg:text-size-p-small': variant.startsWith('p-small'),
        'text-size-p-tiny lg:text-size-p-tiny': variant.startsWith('p-tiny'),
        'font-bold': variant.endsWith('-bold'),
        'font-black': variant.endsWith('-black'),
        'text-size-button-default font-bold': variant === 'button-default',
        'text-size-button-large font-bold': variant === 'button-large',
      },
      className,
    )

    const childrenNormalised = typeof children === 'string' ? normalizeSkText(children) : children

    const elementOptions = {
      ...rest,
      ref: forwardedRef,
      className: classes,
    }

    return createElement(as || variantElement, elementOptions, childrenNormalised)
  },
)

export default Typography
