import InfoCard from '../components/InfoCard'
import Icon, { type IconName } from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import { donationFunds } from '../data/schoolContent'

const icons: Record<string, IconName> = {
  'Student support': 'graduation',
  'Facility care': 'building',
  'Programs and service': 'users',
}

function Donation() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0b0b60] to-[#101080] px-4 py-24 text-white sm:px-6 lg:px-8"
      id="donation"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#f0d030]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#2020a0]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d030]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Ministry Partner"
            light
            text="Giving content is presented clearly so supporters can understand how their contribution strengthens school programs."
            title="Support students, spaces, and service."
          />
          <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f0d030]/10 blur-3xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
                <Icon name="heart" className="mr-2 inline h-5 w-5 align-[-0.2em]" /> Giving note
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Replace this placeholder with MAABC's official donation platform,
                check instructions, Zelle details, or office contact process.
              </p>
              <a
                className="group/btn mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f0c000] to-[#f0d030] px-6 py-3.5 text-sm font-semibold text-[#101080] shadow-xl shadow-[#f0c000]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f0c000]/40 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#f0d030]/50"
                href="#contact"
              >
                <span>Contact About Giving</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {donationFunds.map((item) => (
            <InfoCard
              key={item.title}
              text={item.text}
              title={item.title}
              tone="dark"
              icon={icons[item.title] ?? 'pin'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Donation
