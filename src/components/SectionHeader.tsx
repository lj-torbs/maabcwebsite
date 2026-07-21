type SectionHeaderProps = {
  eyebrow: string
  title: string
  text: string
  align?: 'left' | 'center'
  light?: boolean
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <div className="mb-4 inline-flex items-center gap-2">
        <div className={`h-px w-8 ${light ? 'bg-[#f0d030]/40' : 'bg-[#2020a0]/30'}`} />
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-[#f0d030]' : 'text-[#2020a0]'
          }`}
        >
          {eyebrow}
        </p>
        <div className={`h-px w-8 ${light ? 'bg-[#f0d030]/40' : 'bg-[#2020a0]/30'}`} />
      </div>
      <h2
        className={`text-4xl font-bold leading-tight tracking-tight sm:text-5xl ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      <div className={`mt-4 h-1 w-12 rounded-full ${light ? 'bg-[#f0d030]' : 'bg-[#2020a0]'} ${align === 'center' ? 'mx-auto' : ''}`} />
      <p
        className={`mt-6 text-base leading-relaxed sm:text-lg ${
          light ? 'text-white/80' : 'text-slate-600'
        }`}
      >
        {text}
      </p>
    </div>
  )
}

export default SectionHeader
