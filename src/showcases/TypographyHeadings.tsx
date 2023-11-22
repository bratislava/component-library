import { Typography } from '../../lib/main'
import SectionGroup from './SectionGroup'
import SectionRow from './SectionRow'

/**
 * Showcase component for Typography heading usage.
 *
 * To define a heading, use `type="h1 | h2 | h3 | h4 | h5 | h6"`.
 *
 * Heading supports these props:
 * @param type - (required) The type of the heading.
 *   Available options for type are:
 *   - "h1", "h2", "h3", "h4", "h5" or "h6"
 *
 * @param size - (optional) The size of the heading to use for overriding default heading size.
 *   Available options for size are:
 *   - all options from type with addition of "h1-hero" and "h1-form"
 *
 * @example
 * ```tsx
 *  <Typography type="h1">H1 heading default</Typography>
 * ```
 *
 * @component
 */

const TypographyHeadings = () => {
  return (
    <SectionGroup>
      <SectionRow>
        <Typography type="h1" size="h1-hero">
          H1 Hero heading default
        </Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h1">H1 heading default</Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h1" size="h1-form">
          H1 heading form default
        </Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h2">H2 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h3">H3 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h4">H4 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h5">H5 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography type="h6" size="h6">
          H6 heading
        </Typography>
      </SectionRow>

      <SectionRow>
        <Typography type="h1" size="h3">
          H1 heading - size h3
        </Typography>
      </SectionRow>
    </SectionGroup>
  )
}

export default TypographyHeadings
