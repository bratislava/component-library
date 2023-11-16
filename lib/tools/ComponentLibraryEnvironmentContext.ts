import React, { createContext } from 'react'

const ComponentLibraryEnvironmentContext = createContext<{
  Link: React.FunctionComponent<{
    href: string
    className?: string
    children: React.ReactNode
    ref: React.RefObject<HTMLAnchorElement>
  }>,
  Image: React.FunctionComponent<{
    src: string
    width: number
    height: number
    alt: string
  }>
}>({
  Link: () => null,
  Image: () => null
})

export default ComponentLibraryEnvironmentContext
