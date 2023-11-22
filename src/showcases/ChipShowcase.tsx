import { Chip } from '../../lib/main'

const ChipShowcase = () => {
  return (
    <>
      <h1 className="m-2 text-center">Aria chip component</h1>
      <div className="border-ra rounded border-2 border-dashed pb-5">
        <div className="flex h-56 justify-around">
          <div className="flex flex-col">
            <h3>
              Default <br /> (Working)
            </h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '1', size: 'large', label: 'Chip' },
                { key: '2', size: 'medium', label: 'Chip' },
                { key: '3', size: 'small', label: 'Chip' },
              ]}
            />
          </div>
          <div className="flex flex-col">
            <h3>Disabled</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'disabled' },
                { key: '5', size: 'medium', label: 'Chip', color: 'disabled' },
                { key: '6', size: 'small', label: 'Chip', color: 'disabled' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Main</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'red' },
                { key: '5', size: 'medium', label: 'Chip', color: 'red' },
                { key: '6', size: 'small', label: 'Chip', color: 'red' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Environment</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'green' },
                { key: '5', size: 'medium', label: 'Chip', color: 'green' },
                { key: '6', size: 'small', label: 'Chip', color: 'green' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Transport</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'blue' },
                { key: '5', size: 'medium', label: 'Chip', color: 'blue' },
                { key: '6', size: 'small', label: 'Chip', color: 'blue' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Social</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'yellow' },
                { key: '5', size: 'medium', label: 'Chip', color: 'yellow' },
                { key: '6', size: 'small', label: 'Chip', color: 'yellow' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Education</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'purple' },
                { key: '5', size: 'medium', label: 'Chip', color: 'purple' },
                { key: '6', size: 'small', label: 'Chip', color: 'purple' },
              ]}
            />
          </div>

          <div className="flex flex-col">
            <h3>Culture</h3>
            <Chip
              selectionMode="multiple"
              tags={[
                { key: '4', size: 'large', label: 'Chip', color: 'orange' },
                { key: '5', size: 'medium', label: 'Chip', color: 'orange' },
                { key: '6', size: 'small', label: 'Chip', color: 'orange' },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChipShowcase
