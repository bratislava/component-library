import { Typography } from '../../lib/main'
import SectionGroup from './SectionGroup'
import SectionRow from './SectionRow'

/**
 * Showcase component for Typography span usage.
 *
 * The main use for this type is inside Buttons, but it can also be used anywhere we would otherwise use `<span>`.
 * To define a span, use `type="span"`.
 *
 * Span supports these props:
 * @param size - (optional) Sets "font-size", with default as "font-size: 16px".
 *   Available options for size are:
 *   - "span-large" (font-size: 20px)
 *
 * @example
 * ```tsx
 *  <button type="button">
 *    <Typography type="span" size="span-large">Click me</Typography>
 *  </button>
 * ```
 *
 * * @component
 */

/**
 * TODO: Using type `span` for buttons is not ideal even tho its the element we need to use, perhaps buttons should be handled outside of Typgraphy?
 * */
const TypographyButtons = () => {
  return (
    <SectionGroup>
      <SectionRow>
        <Typography type="h3" size="h4">
          Button text - normal
        </Typography>
        <button type="button">
          <Typography type="span">Click me</Typography>
        </button>
      </SectionRow>
      <SectionRow>
        <Typography type="h3" size="h4">
          Button text - large
        </Typography>

        <button type="button">
          <Typography type="span" size="span-large">
            Click me
          </Typography>
        </button>
      </SectionRow>
    </SectionGroup>
  )
}

export default TypographyButtons
