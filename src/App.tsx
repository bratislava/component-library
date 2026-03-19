import { ReactElement, useState } from 'react'
import { Key, Tab, TabList, TabPanel, Tabs } from 'react-aria-components'

import { Typography } from '../lib/main'
import ButtonShowcase from './showcases/ButtonShowcase'
import TypographyShowcase from './showcases/TypographyShowcase'

const showcases = [
  { id: 'button', label: 'Button', component: <ButtonShowcase /> },
  { id: 'typography', label: 'Typography', component: <TypographyShowcase /> },
] satisfies { id: string; label: string; component: ReactElement }[]

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<Key>(showcases[0].id)

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-screen-lg px-4 pt-12 pb-64 md:px-12">
        <Typography variant="h1" className="mb-10 border-b-6 border-black font-bold">
          Bratislava Component Library Style Guide
        </Typography>

        <Tabs
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
          className="flex flex-col"
        >
          <TabList className="flex flex-wrap gap-2 pb-6">
            {showcases.map(({ id, label }) => (
              <Tab
                key={id}
                id={id}
                className="cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 hover:border-gray-500 hover:bg-gray-50 data-[selected]:border-gray-700 data-[selected]:bg-gray-100 data-[selected]:font-semibold"
              >
                {label}
              </Tab>
            ))}
          </TabList>
          {showcases.map(({ id, component }) => (
            <TabPanel key={id} id={id}>
              {component}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

export default App
