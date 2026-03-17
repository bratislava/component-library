import { ComponentType, createContext, PropsWithChildren, useContext } from 'react'

export type LinkComponentProps = {
  href: string
  target?: string
  className?: string
  children?: React.ReactNode
  ref?: React.Ref<HTMLAnchorElement>
  [key: string]: unknown
}

type ComponentLibraryContextValue = {
  LinkComponent?: ComponentType<LinkComponentProps>
}

const ComponentLibraryContext = createContext<ComponentLibraryContextValue>({})

export type ComponentLibraryProviderProps = PropsWithChildren<{
  /** Custom link component (e.g. Next.js Link). Used by Button and other components. */
  LinkComponent?: ComponentType<LinkComponentProps>
}>

export const ComponentLibraryProvider = ({
  LinkComponent,
  children,
}: ComponentLibraryProviderProps) => {
  const value: ComponentLibraryContextValue = {
    LinkComponent,
  }

  return (
    <ComponentLibraryContext.Provider value={value}>{children}</ComponentLibraryContext.Provider>
  )
}

export const useComponentLibraryContext = () => useContext(ComponentLibraryContext)
