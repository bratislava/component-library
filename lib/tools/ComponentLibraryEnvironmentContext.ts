import React, { createContext } from 'react'

const ComponentLibraryEnvironmentContext = createContext<{
  Link: React.FunctionComponent<{
    href: string
    className?: string
    children: React.ReactNode
    ref: React.ForwardedRef<HTMLAnchorElement>
    passHref?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }>
  Image: React.FunctionComponent<{
    src: string
    width: number
    height: number
    alt: string
  }>
  usePlausible: React.FunctionComponent<{ actionName: string; props: { id: string } }>
}>({
  Link: () => null,
  Image: () => null,
  usePlausible: () => null,
})

export default ComponentLibraryEnvironmentContext
