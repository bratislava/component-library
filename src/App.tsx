import 'tailwindcss/tailwind.css'

import React from 'react'

import Typography from '../lib/components/Typography'
import { Button, Input } from '../lib/main'

const App: React.FC = () => (
  <>
    <Button label="Test button label" onClick={() => {}} />
    <Input />
    <Typography type="p">test</Typography>
  </>
)

export default App
