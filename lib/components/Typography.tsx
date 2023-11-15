import React from 'react'

const Typography = ({ children, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <h1 {...props}>{children}</h1>
)

export default Typography
