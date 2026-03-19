import cn from '../../tools/cn'

type Props = {
  size?: 'lg' | 'md' | 'sm'
  className?: string
}

/**
 * Figma: https://www.figma.com/design/17wbd0MDQcMW9NbXl6UPs8/DS--Component-library?node-id=16846-14584
 */

const Spinner = ({ size = 'md', className }: Props) => {
  return (
    <div
      className={cn(
        // TODO use token-based colors from Figma
        'border-grey-700 border-t-grey-300 animate-spin rounded-[50%] border-solid',
        {
          'h-5 w-5 border-2 border-t-2': size === 'sm',
          'h-8 w-8 border-3 border-t-3': size === 'md',
          'h-12 w-12 border-4 border-t-4': size === 'lg',
        },
        className,
      )}
    />
  )
}

export default Spinner
