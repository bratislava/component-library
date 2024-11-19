import { Typography } from '../../lib/main'
import SectionGroup from './SectionGroup'
import SectionRow from './SectionRow'

/**
 * Showcase component for Typography paragraph usage.
 *
 * To define a paragraph, use `variant="p"`.
 
 * @example
 * ```tsx
 * <Typography variant="p">
 *   This is a semibold and small paragraph.
 * </Typography>
 * ```
 *
 * @component
 */

const TypographyParagraphs = () => {
  return (
    <SectionGroup>
      <SectionRow>
        <Typography variant="h3">Default paragraph</Typography>

        <Typography variant="p-default">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>

      <SectionRow>
        <Typography variant="h3">Default paragraph - bold</Typography>

        <Typography variant="p-default-bold">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h3">Large paragraph</Typography>

        <Typography variant="p-large">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h3">Large paragraph - bold</Typography>

        <Typography variant="p-large-bold">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>

      {/* SMALL PARAGRAPH  */}

      <SectionRow>
        <Typography variant="h3">Small paragraph</Typography>

        <Typography variant="p-small">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>
      <SectionRow>
        <Typography variant="h3">Small paragraph - bold</Typography>

        <Typography variant="p-small-bold">
          Letné kúpaliská STaRZ Bratislava ukončili sezónu. Všetko dobré sa niekedy končí, ale o rok
          sa na profi čľapkanie, seriózne krauly a všetky ležérne znaky tešíme opäť. Areál zdravia
          Zlaté piesky ostáva otvorený bez výberu vstupného od 9:00 do 22:00, vstup cez predný
          hlavný vchod.
          <br />
          <br />
          <a href="/" className="text-black">
            Hypertext link
          </a>
        </Typography>
      </SectionRow>
    </SectionGroup>
  )
}

export default TypographyParagraphs
