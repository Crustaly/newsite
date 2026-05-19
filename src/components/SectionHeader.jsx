const SectionHeader = ({ eyebrow, title, children, align = 'left' }) => {
  return (
    <div className={`section-header ${align === 'center' ? 'section-header-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-deck">{children}</p>}
    </div>
  )
}

export default SectionHeader
