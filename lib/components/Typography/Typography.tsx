import 'tailwindcss/tailwind.css'

import {
  typographyElementDefaultStyles,
  typographyFontWeightVariants,
} from '@components/Typography/utils/constants'
import { normalizeSkText } from '@components/Typography/utils/normalizeSkText'
import { Children, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type SupportedFontWeight = 'light' | 'normal' | 'medium' | 'semibold'
type SupportedElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type SupportedParagraphSize = 'p-small' | 'p-large'
type SupportedSpanSize = 'span-large'
type SupportedHeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h1-hero' | 'h1-form'

/**
 * Props for the Typography component.
 *
 * For type "p", allow props for paragraph sizing, fontWeight and responsive boolean.
 * For type "h1 ... h6", only allow props for heading sizing.
 * For type "span", only allow props for span sizing.
 *
 * @template T - The supported element type ("p", "h1" ... "h6", "span").
 */
type TypographyProps<T extends SupportedElement> = HTMLAttributes<HTMLElement> & {
  type: T
  size?: T extends 'p'
    ? SupportedParagraphSize
    : T extends 'span'
    ? SupportedSpanSize
    : SupportedHeadingSize
  fontWeight?: T extends 'p' ? SupportedFontWeight : never
}

// Design reference for Typography component: https://www.figma.com/file/ctDKMhAPIjLUVNNmq430D4/DS-ESBS%3A-Foundations?node-id=73%3A133&mode=dev
export const Typography = <T extends SupportedElement>({
  type,
  size,
  children,
  className,
  fontWeight,
  ...otherAttributes
}: TypographyProps<T>) => {
  const CustomElement = type as SupportedElement
  const usedFontWeight = fontWeight
    ? typographyFontWeightVariants[fontWeight as SupportedFontWeight]
    : ''
  const usedSize =
    size && (size as SupportedHeadingSize | SupportedParagraphSize | SupportedSpanSize)

  // Normalizing all children texts with provided utility from mestskakniznica
  const normalizedChildren = Children?.map(children, (child) => {
    if (typeof child === 'string') {
      return normalizeSkText(child)
    }

    return child
  })

  return (
    <CustomElement
      className={twMerge(
        usedSize
          ? typographyElementDefaultStyles[usedSize]
          : typographyElementDefaultStyles[type as SupportedElement],
        `[text-wrap:balance] ${usedFontWeight} font-sans`,
        className,
      )}
      {...otherAttributes}
    >
      {normalizedChildren}
    </CustomElement>
  )
}

export default Typography
