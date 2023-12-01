import 'tailwindcss/tailwind.css'

import { Children, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { typographyElementDefaultStyles, typographyFontWeightVariants } from './utils/constants'
import { normalizeSkText } from './utils/normalizeSkText'

type SupportedFontWeightType = 'light' | 'normal' | 'medium' | 'semibold'
type SupportedElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type SupportedParagraphSizeType = 'p-small' | 'p-large'
type SupportedSpanSizeType = 'span-large' | 'span-base-normal' | 'span-small-normal'
type SupportedHeadingSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h1-hero' | 'h1-form'

/**
 * Props for the Typography component.
 *
 * For type "p", allow props for paragraph sizing, fontWeight and responsive boolean.
 * For type "h1 ... h6", only allow props for heading sizing.
 * For type "span", only allow props for span sizing.
 *
 * @template T - The supported element type ("p", "h1" ... "h6", "span").
 */
type TypographyProps<T extends SupportedElementType> = HTMLAttributes<HTMLElement> & {
  type: T
  size?: T extends 'p'
    ? SupportedParagraphSizeType
    : T extends 'span'
    ? SupportedSpanSizeType
    : SupportedHeadingSizeType
  fontWeight?: T extends 'p' ? SupportedFontWeightType : never
}

// Design reference for Typography component: https://www.figma.com/file/ctDKMhAPIjLUVNNmq430D4/DS-ESBS%3A-Foundations?node-id=73%3A133&mode=dev
export const Typography = <T extends SupportedElementType>({
  type,
  size,
  children,
  className,
  fontWeight,
  ...otherAttributes
}: TypographyProps<T>) => {
  const CustomElement = type as SupportedElementType
  const usedFontWeight = fontWeight
    ? typographyFontWeightVariants[fontWeight as SupportedFontWeightType]
    : ''
  const usedSize =
    size && (size as SupportedHeadingSizeType | SupportedParagraphSizeType | SupportedSpanSizeType)

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
          : typographyElementDefaultStyles[type as SupportedElementType],
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
