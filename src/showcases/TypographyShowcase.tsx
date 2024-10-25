import React from 'react'

import { Typography } from '../../lib/main'
import TypographyButtons from './TypographyButtons'
import TypographyHeadings from './TypographyHeadings'
import TypographyParagraphs from './TypographyParagraphs'

/**
 * Showcase page for the Typography component.
 *
 * The Typography component has three variant: heading (h1 ... h6), paragraph (p).
 * Each variant can be selected by setting the "variant" prop.
 *
 * @component
 */
const TypographyShowcase: React.FC = () => (
  <>
    <Typography variant="h1">Typography component</Typography>

    <Typography variant="h2">Headings</Typography>
    <TypographyHeadings />

    <Typography variant="h2">Paragraphs</Typography>
    <TypographyParagraphs />

    <Typography variant="h2">Buttons</Typography>
    <TypographyButtons />
  </>
)

export default TypographyShowcase
