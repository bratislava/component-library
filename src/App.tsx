import 'tailwindcss/tailwind.css'

import React from 'react'

import ShowcaseAlert from './showcases/AlertShowcase'

const App: React.FC = () => (
  <div className="box-border min-h-screen bg-background-color font-sans">
    <ShowcaseAlert />
  </div>
)

export default App
