export type LinkPlausibleProps = { eventName: string; props: PlausibleProps }
export type PlausibleProps = { id: string }

export type LinkProps = {
  variant?: 'unstyled' | 'underlineOnHover' | 'underlined' | 'underlined-medium'
  plausibleProps?: LinkPlausibleProps
  stretched?: boolean
  onClick?: () => null
}

export type AriaLinkType = {
  children: React.ReactNode
  className?: string
  forwardedRef?: React.Ref<HTMLAnchorElement>
  href: string
}
