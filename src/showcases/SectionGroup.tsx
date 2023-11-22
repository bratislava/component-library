type SectionGroupPropsType = {
  children: React.ReactNode
}

const SectionGroup = ({ children }: SectionGroupPropsType) => {
  return <div className="flex flex-col gap-4">{children}</div>
}

export default SectionGroup
