import React from 'react'

type SectionRowPropsType = {
  children: React.ReactNode
}

const SectionRow = ({ children }: SectionRowPropsType) => {
  return <div className="rounded-lg border border-dashed border-gray-800 p-5">{children}</div>
}

export default SectionRow
