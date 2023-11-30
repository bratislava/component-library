import { twMerge } from 'tailwind-merge'

type SpinnerBase = {
  size?: 'lg' | 'md' | 'sm'
  className?: string
}

const Spinner = ({ size = 'md', className }: SpinnerBase) => {
  const style = twMerge(
    'animate-spin rounded-[50%] border-solid border-gray-700 border-t-gray-300',
    className,

    size === 'sm' && 'w-5 h-5 border-2 border-t-2',
    size === 'md' && 'w-8 h-8 border-3 border-t-3',
    size === 'lg' && 'w-12 h-12 border-4 border-t-4',
  )

  return <div className={style} />
}

export default Spinner
