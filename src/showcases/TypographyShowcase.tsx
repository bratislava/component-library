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
  <div className="flex flex-col gap-10">
    <div className="flex flex-col gap-2">
      <Typography variant="h3">Headings</Typography>
      <TypographyHeadings />
    </div>

    <div className="flex flex-col gap-2">
      <Typography variant="h3">Paragraphs</Typography>
      <TypographyParagraphs />
    </div>

    <div className="flex flex-col gap-2">
      <Typography variant="h3">Buttons</Typography>
      <TypographyButtons />
    </div>
  </div>
)

export default TypographyShowcase
