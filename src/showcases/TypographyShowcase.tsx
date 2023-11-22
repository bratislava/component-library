import React from 'react'

import { Typography } from '../../lib/main'
import TypographyButtons from './TypographyButtons'
import TypographyHeadings from './TypographyHeadings'
import TypographyParagraphs from './TypographyParagraphs'

/**
 * Showcase page for the Typography component.
 *
 * The Typography component has three types: heading (h1 ... h6), paragraph (p), or span.
 * Each type can be selected by setting the "type" prop.
 *
 * @component
 */
const TypographyShowcase: React.FC = () => (
  <>
    <Typography type="h1">Typography component</Typography>

    <Typography type="h2">Headings</Typography>
    <TypographyHeadings />

    <Typography type="h2">Paragraphs</Typography>
    <TypographyParagraphs />

    <Typography type="h2">Buttons</Typography>
    <TypographyButtons />
  </>
)

export default TypographyShowcase
