import { Selection } from 'react-aria-components'

export type ChipSizeProps = 'large' | 'medium' | 'small'

export type ChipColorsProps = 'blue' | 'brown' | 'green' | 'purple' | 'red' | 'yellow' | 'disabled'

export type ChipProps = {
  key: string
  id: string
  label: string | React.ReactNode
  size?: ChipSizeProps
  chipStyle?: string
  color?: ChipColorsProps
}

export type BaChipProps = {
  tags: ChipProps[]
  children?: React.ReactNode
}

export type BaTagGroupProps = {
  setTags: (keys: Selection) => void
  selectedTags: Selection
  disabledTags?: string[]
  defaultSelectedTags?: Iterable<string>
  tagListClassName?: string
}
