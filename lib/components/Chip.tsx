import React, { useState } from 'react'
import { Selection, Tag, TagGroup, TagGroupProps, TagList, TagProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

type ChipColorsType =
  | 'default'
  | 'blue'
  | 'brown'
  | 'green'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'disabled'
  | 'orange'

type ChipSizeType = 'large' | 'medium' | 'small'
type ChipTagType = {
  key: string
  label: string | React.ReactNode
  size?: ChipSizeType
  chipStyle?: string
  color?: ChipColorsType
}

type ChipProps = {
  tags: ChipTagType[]
  children?: React.ReactNode
}

type ChipType = ChipProps & TagProps & TagGroupProps
const Chip = ({ tags, children, className, ...props }: ChipType) => {
  const [selectedTags, setSelectedTags] = useState<Selection>(new Set<string>())

  const sizeVariants = {
    large: 'w-[55px] max-h-[32px] px-1.5 py-3 lg:w-[68px] lg:max-h-[44px] lg:x-2.5 lg:py-4',
    medium: 'w-[47px] max-h-[24px] px-0.5 py-2 lg:w-[55px] lg:max-h-[32px] lg:px-1.5 lg:py-3',
    small: 'w-[47px] max-h-[24px] px-0.5 py-2',
  }

  const colorVariants = {
    default: 'bg-white border-gray-300 text-gray-700 border-solid border-2',
    disabled: 'bg-white border-disabledOrHover text-disabledOrHover border-solid border-2',
    red: 'bg-main border-none text-white',
    green: 'bg-environment border-none text-white',
    blue: 'bg-transport border-none text-white',
    yellow: 'bg-social border-none text-gray-700',
    purple: 'bg-education border-none text-white',
    orange: 'bg-culture border-none text-gray-700',
    brown: '',
  }

  return (
    <TagGroup
      aria-label="chip"
      className={twMerge('h-full w-min', className)}
      selectedKeys={selectedTags}
      onSelectionChange={setSelectedTags}
      {...props}
    >
      <TagList className="flex h-full flex-col items-center justify-between">
        {tags.map(({ key, size = 'large', color = 'default', chipStyle = '', label }) => {
          return (
            <Tag
              key={key}
              className={twMerge(
                'box-border flex cursor-pointer items-center justify-center rounded-lg border-2 text-center transition-all duration-300 ease-in-out hover:border-disabledOrHover hover:bg-disabledOrHover hover:text-defaultBlack selected:border-none selected:bg-defaultBlack selected:text-white',
                size === 'large' ? 'text-default-responsive' : 'text-size-p-small',
                chipStyle,
                sizeVariants[size],
                colorVariants[color],
              )}
            >
              {label}
            </Tag>
          )
        })}
      </TagList>
    </TagGroup>
  )
}

export default Chip
