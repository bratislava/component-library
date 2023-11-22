import 'tailwindcss/tailwind.css'

import React from 'react'

import { Typography } from '../lib/main'
import TypographyShowcase from './showcases/TypographyShowcase'

const App: React.FC = () => (
  <div className="bg-gray-100 ">
    <div className="md:pt-100 mx-auto max-w-screen-lg pb-64 md:px-12">
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
