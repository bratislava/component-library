import 'tailwindcss/tailwind.css'

import { Typography } from '@lib/main'
import TypographyShowcase from '@showcases/Typography/TypographyShowcase'

const App = () => (
  <div className="m-[-8px] bg-background-color">
    <div className="md:pt-100 mx-auto max-w-screen-lg py-20 pb-64 md:px-12">
      <div className="mb-10 flex justify-center">
        <Typography type="h1" className="m-auto underline">
          Style guide
        </Typography>
      </div>

      <TypographyShowcase />
    </div>
  </div>
)

export default App
