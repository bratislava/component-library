import TypographyButtons from '@showcases/Typography/TypographyButtons'
import TypographyHeadings from '@showcases/Typography/TypographyHeadings'
import TypographyParagraphs from '@showcases/Typography/TypographyParagraphs'

/**
 * Showcase page for the Typography component.
 *
 * The Typography component has three types: heading (h1 ... h6), paragraph (p), or span.
 * Each type can be selected by setting the "type" prop.
 *
 * @component
 */
const TypographyShowcase = () => (
  <>
    <TypographyHeadings />
    <TypographyParagraphs />
    <TypographyButtons />
  </>
)

export default TypographyShowcase
