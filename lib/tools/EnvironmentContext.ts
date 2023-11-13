import React, { createContext } from 'react'

const EnvironmentContext = createContext<{
  Link: React.FunctionComponent<{
    href: string
    className?: string
    children: React.ReactNode
    ref: React.RefObject<HTMLAnchorElement>
  }>
}>({
  Link: () => null,
})

export default EnvironmentContext
