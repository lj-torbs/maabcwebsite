import SectionHeader from '../components/SectionHeader'

function EnrollNow() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f7f8fb] px-4 py-24 sm:px-6 lg:px-8" id="enroll-now">
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#f0c000]/5 to-[#f0d030]/5 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Enroll now"
            text="Families can use this section to begin the admissions conversation and share basic student details."
            title="Start the MAABC enrollment process."
          />

          <form className="group rounded-2xl border border-[#f0c000]/30 bg-gradient-to-br from-[#fff8d7] to-[#fff0c0] p-8 shadow-xl shadow-[#f0c000]/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#f0c000]/20">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Enrollment Inquiry</h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Parent name
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="Full name"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="parent@example.com"
                  type="email"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Student name
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="Student name"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Grade or program
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="Program interest"
                  type="text"
                />
              </label>
            </div>

            <button
              className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#101080] to-[#2020a0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#101080]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#101080]/40 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#2020a0]/25"
              type="submit"
            >
              <span>Submit Enrollment Inquiry</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EnrollNow
