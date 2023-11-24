import { Selection, Tag, TagGroup, TagGroupProps, TagList, TagProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { ChipProps } from '../types/tagGroupTypes'

export type BaTagGroupProps = {
  setTags: (keys: Selection) => void
  selectedTags: Selection
  disabledTags?: string[]
  defaultSelectedTags?: Iterable<string>
  tagListClassName?: string
}

type TagGroupType = ChipProps & TagProps & BaTagGroupProps & TagGroupProps

const BaTagGroup = ({
  tags,
  children,
  className,
  setTags,
  selectedTags,
  disabledTags,
  tagListClassName,
  defaultSelectedTags,
  ...props
}: TagGroupType) => {
  const sizeVariants = {
    large:
      'min-w-[55px] max-h-[32px] px-1.5 py-3 lg:min-w-[68px] lg:max-h-[44px] lg:px-4 lg:py-2.5',
    medium:
      'min-w-[47px] max-h-[24px] px-0.5 py-2 lg:min-w-[55px] lg:max-h-[32px] lg:px-3 lg:py-1.5',
    small: 'min-w-[47px] max-h-[24px] px-2 py-0.5',
  }

  const colorVariants = {
    disabled: 'bg-white border-disabledOrHover text-disabledOrHover border-solid border-2',
    red: 'selected:bg-main selected:border-none selected:text-white hover:none',
    green: 'selected:bg-environment selected:border-none selected:text-white hover:none',
    blue: 'selected:bg-transport selected:border-none selected:text-white hover:none',
    yellow: 'selected:bg-social selected:border-none selected:text-gray-700 hover:none',
    purple: 'selected:bg-education selected:border-none selected:text-white hover:none',
    brown: 'selected:bg-culture selected:border-none selected:text-gray-700 hover:none',
  }

  return (
    <TagGroup
      aria-label="chip"
      className={className}
      selectedKeys={selectedTags}
      onSelectionChange={setTags}
      disabledKeys={disabledTags || []}
      defaultSelectedKeys={defaultSelectedTags}
      {...props}
    >
      <TagList className={tagListClassName || ''}>
        {tags.map(({ key, id = '', size = 'large', color, chipStyle = '', label }) => {
          return (
            <Tag
              id={id}
              key={key}
              className={twMerge(
                'flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border-2 border-gray-300 bg-white text-center text-gray-700 transition-all duration-300 ease-in-out hover:border-disabledOrHover hover:bg-disabledOrHover hover:text-defaultBlack selected:border-none selected:bg-defaultBlack selected:text-white',
                size === 'large' ? 'text-default-responsive' : 'text-size-p-small',
                chipStyle,
                sizeVariants[size],
                color && colorVariants[color],
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

export default BaTagGroup
