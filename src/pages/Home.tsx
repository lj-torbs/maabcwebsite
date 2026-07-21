import { schoolName } from '../data/schoolContent'

function Home() {
  return (
    <section
      className="relative isolate overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src="/Copy of DSC_1389.JPG"
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
          <span className="absolute select-none text-[7rem] font-semibold leading-none tracking-normal text-white/[0.035] sm:text-[10rem] lg:text-[13rem]">
            MAABC
          </span>
          <h1 className="relative text-6xl font-semibold leading-none tracking-normal text-white drop-shadow-2xl sm:text-8xl lg:text-9xl">
            <span className="bg-gradient-to-r from-white via-[#fff6b0] to-white bg-clip-text text-transparent"> //fontchange
              {schoolName}
            </span>
          </h1>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
          A community-centered learning environment shaped by faith, service,
          academic growth, and family partnership.
        </p>

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
            href="#donation"
          >
            <span>Support MAABC</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
        </div>

        <div className="mt-14 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-[#f0d030]/70 to-transparent" />
      </div>
    </section>
  )
}

export default Home
