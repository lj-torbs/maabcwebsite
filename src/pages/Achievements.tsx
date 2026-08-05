import SectionHeader from '../components/SectionHeader'
import Icon, { type IconName } from '../components/Icon'
import ReportLinks from '../components/ReportLinks'
import { publicAsset } from '../lib/publicAsset'

const achievementStats = [
  { value: '1959', label: 'Founded in ministry education' },
  { value: '4', label: 'Current focus areas' },
  { value: '2', label: 'President reports available' },
]

const achievementAreas: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Academic Formation',
    text: 'Ongoing development of theology, ministry, counseling, music, and community-focused programs for field-ready leaders.',
    icon: 'graduation',
  },
  {
    title: 'Student Support',
    text: 'Mentoring, student formation, and campus life efforts that help students grow in faith, character, and service.',
    icon: 'users',
  },
  {
    title: 'Campus Stewardship',
    text: 'Care for classrooms, chapel spaces, offices, housing, and shared facilities that support daily school life.',
    icon: 'building',
  },
  {
    title: 'Community Engagement',
    text: 'Continued connection with churches, ministry partners, and surrounding communities through service and outreach.',
    icon: 'heart',
  },
]

function Achievements() {
  return (
    <section className="overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8" id="achievements">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Achievements"
          text="Highlights from academic growth, student support, facilities, and community engagement."
          title="Milestones Shaped by Faithful Service"
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          {achievementStats.map((stat) => (
            <div
              className="rounded-xl border border-slate-200 bg-[#f7f8fb] px-5 py-6 text-center"
              key={stat.label}
            >
              <p className="text-3xl font-semibold text-[#101080] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-5 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl mt-12 grid overflow-hidden border border-slate-200 bg-[#f7f8fb] shadow-2xl shadow-slate-950/[0.08] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[420px]">
            <img
              src={publicAsset('Presidnt.jpg')}
              alt="Dr. Ruel D. Invidiado - School President"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/85 via-[#0b0b60]/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d030]">
                Presidential Leadership
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Dr. Ruel D. Invidiado
              </h3>
              <p className="mt-2 text-sm text-white/75">MAABCI President</p>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-[#0b0b60] via-[#101080] to-[#2020a0] p-7 text-white sm:p-9 lg:p-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
                Progress Reports
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Clear updates on the school&apos;s academic, spiritual, and community work.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                The President&apos;s Reports collect recent highlights from the school,
                including ministry activity, campus development, student life, and
                institutional priorities.
              </p>
            </div>

            <div className="mt-8 max-w-2xl">
              <ReportLinks />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievementAreas.map((area) => (
            <article
              className="rounded-xl group border border-slate-200 bg-white p-6 shadow-lg shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-xl hover:shadow-[#2020a0]/10"
              key={area.title}
            >
              <span className="rounded-full grid h-12 w-12 place-items-center bg-[#2020a0]/10 text-[#2020a0] transition duration-300 group-hover:bg-[#2020a0] group-hover:text-white">
                <Icon name={area.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{area.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
