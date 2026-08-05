import InfoCard from '../components/InfoCard'
import type { IconName } from '../components/Icon'
import { publicAsset } from '../lib/publicAsset'
import {
  academicPrograms,
  campusHighlights,
  finalCta,
  heroContent,
  schoolName,
  welcomeContent,
} from '../data/schoolContent'

const campusIcons: IconName[] = ['building', 'heart', 'graduation', 'users']

function Home() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 -z-20">
          <img
            src={publicAsset('maabc.jpg')}
            alt="Students walking through a campus"
            className="h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,58,0.88),rgba(16,16,128,0.76)_48%,rgba(6,6,58,0.9))]" />
        </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(240,208,48,0.18),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,96px_96px,96px_96px]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#f7f8fb] to-transparent" />

        <div className="mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0d030] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f0d030]" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/90">
              Mt. Apo Alliance Bible College, Inc.
            </span>
          </div>

          <div className="mt-8 grid place-items-center">
            <span className="absolute select-none font-['Libre_Baskerville'] text-[7rem] font-semibold leading-none tracking-normal text-white/[0.035] sm:text-[10rem] lg:text-[13rem]">
              {schoolName}
            </span>

            <h1 className="relative font-['Libre_Baskerville'] text-6xl font-semibold leading-none tracking-normal text-white drop-shadow-2xl sm:text-8xl lg:text-9xl">
              <span className="bg-gradient-to-r from-white via-[#fff6b0] to-white bg-clip-text text-transparent">
                {schoolName}
              </span>
            </h1>
          </div>

          <p className="mt-8 max-w-3xl font-['Libre_Baskerville'] text-2xl leading-relaxed text-white/95 sm:text-3xl">
            {heroContent.headline}
          </p>
          {/*<p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {heroContent.subheadline}
          </p>*/}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#f0c000] to-[#f0d030] px-6 py-3.5 text-sm font-semibold text-[#101080] shadow-xl shadow-[#f0c000]/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#f0c000]/40 focus:outline-none focus:ring-4 focus:ring-[#f0d030]/50"
              href="#enroll-now"
            >
              <span>Enroll Now</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
              href="#programs"
            >
              <span>Explore Programs</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
            </a>
          </div>

          <div className="mt-14 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-[#f0d030]/70 to-transparent" />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{welcomeContent.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{welcomeContent.text}</p>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-20 sm:px-6 lg:px-8" id="programs">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2020a0]">{academicPrograms.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{academicPrograms.title}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg shadow-slate-950/[0.04]">
              <h3 className="text-lg font-bold text-[#101080]">{academicPrograms.degreeProgramsTitle}</h3>
              <ul className="mt-4 space-y-3">
                {academicPrograms.degreePrograms.map((program) => (
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-700" key={program}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c000]" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg shadow-slate-950/[0.04]">
              <h3 className="text-lg font-bold text-[#101080]">{academicPrograms.certificateProgramsTitle}</h3>
              <ul className="mt-4 space-y-3">
                {academicPrograms.certificatePrograms.map((program) => (
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-700" key={program}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c000]" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#0b0b60] to-[#101080] p-8 text-white shadow-xl sm:p-10">
            <h3 className="text-xl font-bold">{academicPrograms.tuitionTitle}</h3>
            <p className="mt-2 text-sm text-white/80">{academicPrograms.tuitionText}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f0d030]">Tuition Rate</p>
                <p className="mt-1 text-lg font-semibold">{academicPrograms.tuitionRate}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f0d030]">Estimated Cost</p>
                <p className="mt-1 text-lg font-semibold">{academicPrograms.estimatedCost}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Purpose-Built Spaces for Worship, Study, and Fellowship
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our campus provides practical facilities to support every aspect of student life:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {campusHighlights.map((item, index) => (
              <InfoCard key={item.title} icon={campusIcons[index] ?? 'pin'} text={item.text} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0b60] to-[#101080] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{finalCta.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">{finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f0c000] to-[#f0d030] px-6 py-3.5 text-sm font-semibold text-[#101080] shadow-xl shadow-[#f0c000]/25 transition-all duration-300 hover:scale-[1.02]"
              href="#enroll-now"
            >
              Start Your Enrollment
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:bg-white/20"
              href="#contact"
            >
              Contact Our Office
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
