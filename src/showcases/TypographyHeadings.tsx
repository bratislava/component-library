import { Typography } from '../../lib/main'
import SectionGroup from './SectionGroup'
import SectionRow from './SectionRow'

/**
 * Showcase component for Typography heading usage.
 *
 * To define a heading, use `variant="h1 | h2 | h3 | h4 | h5 | h6"`.
 *
 * Heading supports these props:
 * @param variant - (required) The variant of the heading.
 *   Available options for variant are:
 *   - "h1", "h2", "h3", "h4", "h5" or "h6"
 *
 * @example
 * ```tsx
 *  <Typography variant="h1">H1 heading default</Typography>
 * ```
 *
 * @component
 */

const TypographyHeadings = () => {
  return (
    <SectionGroup>
      <SectionRow>
        <Typography variant="h1-hero">H1 Hero heading default</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h1">H1 heading default</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h2">H2 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h3">H3 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h4">H4 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h5">H5 heading</Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h6">H6 heading</Typography>
      </SectionRow>
    </SectionGroup>
  )
}

export default TypographyHeadings
