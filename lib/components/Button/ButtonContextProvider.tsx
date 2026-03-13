import { ComponentType, createContext, PropsWithChildren, useContext } from 'react'

export type LinkComponentProps = {
  href: string
  target?: string
  className?: string
  children?: React.ReactNode
  ref?: React.Ref<HTMLAnchorElement>
  [key: string]: unknown
}

type ButtonContextType = {
  LinkComponent?: ComponentType<LinkComponentProps>
}

const ButtonContext = createContext<ButtonContextType>({})

export type ButtonProviderProps = PropsWithChildren<{
  linkComponent?: ComponentType<LinkComponentProps>
}>

export const ButtonProvider = ({ linkComponent, children }: ButtonProviderProps) => (
  <ButtonContext.Provider value={{ LinkComponent: linkComponent }}>
    {children}
  </ButtonContext.Provider>
)

export const useButtonContext = () => useContext(ButtonContext)
