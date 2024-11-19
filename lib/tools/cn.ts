// cn helper function inspired by https://ui.shadcn.com/docs/installation/manual
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

import tailwindConfig from '../../tailwind.config'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': Object.keys(tailwindConfig.theme.fontSize).map((key) => `text-${key}`),
    },
  },
})

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export default cn
