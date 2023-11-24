import { useState } from 'react'
import { Selection } from 'react-aria-components'

import { BaTagGroup } from '../../lib/main'

const ChipShowcase = () => {
  const [selectedDefault, setSelectedDefault] = useState<Selection>(new Set<string>())
  const [selectedDisabled, setSelectedDisabled] = useState<Selection>(new Set<string>())
  const [selectedMain, setSelectedMain] = useState<Selection>(new Set<string>())
  const [selectedEnv, setSelectedEnv] = useState<Selection>(new Set<string>())
  const [selectedTransport, setSelectedTransport] = useState<Selection>(new Set<string>())
  const [selectedSocial, setSelectedSocial] = useState<Selection>(new Set<string>())
  const [selectedEdu, setSelectedEdu] = useState<Selection>(new Set<string>())
  const [selectedCulture, setSelectedCulture] = useState<Selection>(new Set<string>())

  return (
    <>
      <h1 className="m-2 text-center">Aria chip component</h1>
      <div className="border-ra rounded border-2 border-dashed p-5">
        <div className="">
          <div className="">
            <h3>Default</h3>
            <BaTagGroup
              setTags={setSelectedDefault}
              selectedTags={selectedDefault}
              selectionMode="single"
              tagListClassName="flex gap-2"
              tags={[
                { id: '1', key: '1', size: 'large', label: 'Chip' },
                { id: '2', key: '2', size: 'medium', label: 'Chip' },
                { id: '3', key: '3', size: 'small', label: 'Chip' },
              ]}
            />
          </div>
          <div className="flex flex-col">
            <h3>Disabled</h3>
            <BaTagGroup
              setTags={setSelectedDisabled}
              selectedTags={selectedDisabled}
              selectionMode="single"
              disabledTags={['4', '5', '6']}
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '4', key: '4', size: 'large', label: 'Chip', color: 'disabled' },
                { id: '5', key: '5', size: 'medium', label: 'Chip', color: 'disabled' },
                { id: '6', key: '6', size: 'small', label: 'Chip', color: 'disabled' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Main</h3>
            <BaTagGroup
              setTags={setSelectedMain}
              selectedTags={selectedMain}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              defaultSelectedKeys="7"
              tags={[
                { id: '7', key: '7', size: 'large', label: 'Chip', color: 'red' },
                { id: '8', key: '8', size: 'medium', label: 'Chip', color: 'red' },
                { id: '9', key: '9', size: 'small', label: 'Chip', color: 'red' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Environment</h3>
            <BaTagGroup
              className="justify-space-around"
              setTags={setSelectedEnv}
              selectedTags={selectedEnv}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '10', key: '10', size: 'large', label: 'Chip', color: 'green' },
                { id: '11', key: '11', size: 'medium', label: 'Chip', color: 'green' },
                {
                  id: '12',
                  key: '12',
                  size: 'small',
                  label: 'Chip',
                  color: 'green',
                },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Transport</h3>
            <BaTagGroup
              setTags={setSelectedTransport}
              selectedTags={selectedTransport}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '13', key: '13', size: 'large', label: 'Chip', color: 'blue' },
                { id: '14', key: '14', size: 'medium', label: 'Chip', color: 'blue' },
                { id: '15', key: '15', size: 'small', label: 'Chip', color: 'blue' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Social</h3>
            <BaTagGroup
              setTags={setSelectedSocial}
              selectedTags={selectedSocial}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '16', key: '16', size: 'large', label: 'Chip', color: 'yellow' },
                { id: '17', key: '17', size: 'medium', label: 'Chip', color: 'yellow' },
                { id: '18', key: '18', size: 'small', label: 'Chip', color: 'yellow' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Education</h3>
            <BaTagGroup
              setTags={setSelectedEdu}
              selectedTags={selectedEdu}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '19', key: '19', size: 'large', label: 'Chip', color: 'purple' },
                { id: '20', key: '20', size: 'medium', label: 'Chip', color: 'purple' },
                { id: '21', key: '21', size: 'small', label: 'Chip', color: 'purple' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Culture</h3>
            <BaTagGroup
              setTags={setSelectedCulture}
              selectedTags={selectedCulture}
              selectionMode="single"
              tagListClassName="flex flex-wrap gap-2"
              tags={[
                { id: '23', key: '22', size: 'large', label: 'Chip', color: 'brown' },
                { id: '24', key: '23', size: 'medium', label: 'Chip', color: 'brown' },
                { id: '25', key: '24', size: 'small', label: 'Chip', color: 'brown' },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChipShowcase
