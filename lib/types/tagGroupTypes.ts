export type ChipSizeType = 'large' | 'medium' | 'small'

export type ChipColorsType = 'blue' | 'brown' | 'green' | 'purple' | 'red' | 'yellow' | 'disabled'

export type ChipTagType = {
  key: string
  id: string
  label: string | React.ReactNode
  size?: ChipSizeType
  chipStyle?: string
  color?: ChipColorsType
}

export type ChipProps = {
  tags: ChipTagType[]
  children?: React.ReactNode
}
