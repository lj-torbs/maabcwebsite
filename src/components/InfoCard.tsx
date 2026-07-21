import Icon, { type IconName } from './Icon'

type InfoCardProps = {
  title: string
  text: string
  tone?: 'light' | 'dark'
  icon?: IconName
}

function InfoCard({ title, text, tone = 'light', icon = 'pin' }: InfoCardProps) {
  const isDark = tone === 'dark'

  return (
    <article
      className={`group relative overflow-hidden rounded-xl p-7 transition-all duration-500 ${
        isDark
          ? 'border border-white/10 bg-gradient-to-br from-white/5 to-white/10 text-white shadow-xl shadow-black/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1'
          : 'border border-slate-200/60 bg-white text-slate-950 shadow-lg shadow-slate-950/[0.04] hover:-translate-y-1.5 hover:border-[#2020a0]/30 hover:shadow-xl hover:shadow-[#2020a0]/10'
      }`}
    >
      {/* Decorative gradient */}
      <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 ${
        isDark ? 'bg-[#f0d030]/10' : 'bg-[#2020a0]/5'
      }`} />

      {/* Icon */}
      <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-all duration-300 group-hover:scale-110 ${
        isDark
          ? 'bg-[#f0d030]/20 text-[#f0d030]'
          : 'bg-gradient-to-br from-[#101080]/10 to-[#2020a0]/10 text-[#101080]'
      }`}>
        <Icon name={icon} className="h-5 w-5" />
      </div>

      <h3 className="relative text-lg font-semibold leading-snug tracking-tight">
        {title}
      </h3>
      <p
        className={`relative mt-3 text-sm leading-relaxed ${
          isDark ? 'text-white/75' : 'text-slate-600'
        }`}
      >
        {text}
      </p>

      {/* Decorative line */}
      <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#f0d030] to-[#f0c000] transition-all duration-500 group-hover:w-full ${
        isDark ? '' : 'opacity-50'
      }`} />
    </article>
  )
}

export default InfoCard
