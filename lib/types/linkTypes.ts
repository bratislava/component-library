export type LinkPlausibleType = { eventName: string; props: LinkPlausibleProps }
export type LinkPlausibleProps = { id: string }

export type LinkProps = {
  variant?: 'unstyled' | 'underlineOnHover' | 'underlined' | 'underlined-medium'
  plausibleProps?: LinkPlausibleType
  stretched?: boolean
  onClick?: () => null
}

export type AriaLinkType = {
  children: React.ReactNode
  className?: string
  forwardedRef?: React.Ref<HTMLAnchorElement>
  href: string
}
