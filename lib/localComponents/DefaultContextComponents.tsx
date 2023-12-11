const DefaultLink: React.FunctionComponent<{
  href: string
  className?: string
  children: React.ReactNode
  passHref?: boolean
}> = ({ href, children, className, ...rest }) => (
  <a href={href} className={className} {...rest}>
    {children}
  </a>
)

const DefaultImage: React.FunctionComponent<{
  src: string
  width: number
  height: number
  alt: string
}> = ({ src, width, height, alt, ...rest }) => (
  <img src={src} width={width} height={height} alt={alt} {...rest} />
)

export { DefaultImage, DefaultLink }
