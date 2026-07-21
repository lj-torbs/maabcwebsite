import Icon, { type IconName } from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import { contactDetails } from '../data/schoolContent'

const contactIcons: Record<string, IconName> = {
  location: 'mapPin',
  phone: 'phone',
  email: 'mail',
  hours: 'clock',
}

function Contact() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8" id="contact">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#101080]/5 to-[#2020a0]/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              text="Use this section for office questions, enrollment follow-up, donation coordination, and room or program inquiries."
              title="Reach the MAABC school office."
            />
            <dl className="mt-8 grid gap-4 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-[#f7f8fb] to-white p-8 shadow-xl shadow-slate-950/[0.04]">
              {Object.entries(contactDetails).map(([key, value]) => (
                <div key={key} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2020a0]/10 text-[#2020a0]">
                    <Icon name={contactIcons[key] ?? 'pin'} className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2020a0]">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </dt>
                    <dd className="mt-1 text-slate-700">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <form className="group rounded-2xl border border-slate-200/60 bg-white p-8 shadow-xl shadow-slate-950/[0.06] transition-all duration-300 hover:shadow-2xl hover:shadow-[#2020a0]/10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a message</h3>

            <div className="space-y-5">
              <label className="block text-sm font-medium text-slate-700">
                Full Name
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea
                  className="mt-2 min-h-36 w-full rounded-xl border border-slate-300/60 bg-white px-4 py-3.5 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/15 hover:border-slate-400"
                  placeholder="How can we help?"
                />
              </label>
            </div>

            <button
              className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#101080] to-[#2020a0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#101080]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#101080]/40 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#2020a0]/25"
              type="submit"
            >
              <span>Send Message</span>
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

export default Contact
