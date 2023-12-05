import React, { createContext } from 'react'

const ComponentLibraryEnvironmentContext = createContext<{
  Link: React.FunctionComponent<{
    href: string
    className?: string
    children: React.ReactNode
    ref: React.ForwardedRef<HTMLAnchorElement>
    passHref?: boolean
  }>
  Image: React.FunctionComponent<{
    src: string
    width: number
    height: number
    alt: string
  }>
  plausible: (eventName: string, props: { id: string }) => void
}>({
  Link: () => null,
  Image: () => null,
  plausible: () => null,
})

export default ComponentLibraryEnvironmentContext
