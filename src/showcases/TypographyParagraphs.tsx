import { Typography } from '../../lib/main'
import SectionGroup from './SectionGroup'
import SectionRow from './SectionRow'

/**
 * Showcase component for Typography paragraph usage.
 * 
 * To define a paragraph, use `type="p"`.
 * 
 * Paragraph supports these props:
 * @param fontWeight - (optional) Sets "font-weight", with default as "font-normal" (font-weight: 400).
 *   Available options are "light", "normal", "medium", "semibold".
 * 
 * @param size - (optional) Sets "font-size", with default as "font-size: 16px".
 *   Available options for size are:
 *   - "p-small" (font-size: 14px)
 *   - "p-large" (font-size: 20px)
 *

 * @example
 * ```tsx
 * <Typography type="p" fontWeight="semibold" size="p-small">
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
        <Typography type="h3" size="h4">
          Default paragraph - light
        </Typography>

        <Typography type="p" fontWeight="light">
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
        <Typography type="h3" size="h4">
          Default paragraph - normal
        </Typography>

        <Typography type="p">
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
        <Typography type="h3" size="h4">
          Default paragraph - medium
        </Typography>

        <Typography type="p" fontWeight="medium">
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
        <Typography type="h3" size="h4">
          Default paragraph - semibold
        </Typography>

        <Typography type="p" fontWeight="semibold">
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
        <Typography type="h3" size="h4">
          Small paragraph - light
        </Typography>

        <Typography type="p" size="p-small" fontWeight="light">
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
        <Typography type="h3" size="h4">
          Small paragraph - normal
        </Typography>

        <Typography type="p" size="p-small">
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
        <Typography type="h3" size="h4">
          Small paragraph - medium
        </Typography>

        <Typography type="p" size="p-small" fontWeight="medium">
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
        <Typography type="h3" size="h4">
          Small paragraph - semibold
        </Typography>

        <Typography type="p" size="p-small" fontWeight="semibold">
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
        <Typography type="h3" size="h4">
          Large paragraph - light
        </Typography>

        <Typography type="p" size="p-large" fontWeight="light">
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
        <Typography type="h3" size="h4">
          Large paragraph - normal
        </Typography>

        <Typography type="p" size="p-large">
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
        <Typography type="h3" size="h4">
          Large paragraph - medium
        </Typography>

        <Typography type="p" size="p-large" fontWeight="medium">
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
        <Typography type="h3" size="h4">
          Large paragraph - semibold
        </Typography>

        <Typography type="p" size="p-large" fontWeight="semibold">
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
