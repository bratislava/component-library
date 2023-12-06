const DefaultLink: React.FunctionComponent<{
  href: string
  className?: string
  children: React.ReactNode
  ref: React.ForwardedRef<HTMLAnchorElement>
  passHref?: boolean
}> = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
)

const DefaultImage: React.FunctionComponent<{
  src: string
  width: number
  height: number
  alt: string
}> = ({ src, width, height, alt }) => <img src={src} width={width} height={height} alt={alt} />

export { DefaultImage, DefaultLink }
