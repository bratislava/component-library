import React, { createContext } from 'react'

import { DefaultImage, DefaultLink } from '../localComponents/DefaultContextComponents'

const ComponentLibraryEnvironmentContext = createContext<{
  Link?: React.FunctionComponent<{
    href: string
    className?: string
    children: React.ReactNode
    ref: React.ForwardedRef<HTMLAnchorElement>
    passHref?: boolean
  }>
  Image?: React.FunctionComponent<{
    src: string
    width: number
    height: number
    alt: string
  }>
  plausible?: (eventName: string, props: { id: string }) => void
}>({
  Link: DefaultLink,
  Image: DefaultImage,
  plausible: () => null,
})

export default ComponentLibraryEnvironmentContext
