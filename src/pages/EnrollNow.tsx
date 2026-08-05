import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'
import SectionHeader from '../components/SectionHeader'
import { admissionRequirements } from '../data/schoolContent'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// TODO: swap for the real admissions office address when ready
const INQUIRY_RECIPIENT_EMAIL = 'maabc59@email.com'

const admissionsSteps = [
  {
    title: 'Submit inquiry',
    text: 'Send your basic details and program interest to the school office.',
  },
  {
    title: 'Prepare records',
    text: 'Use the document checklist for your student type before visiting.',
  },
  {
    title: 'Coordinate enrollment',
    text: 'The office will guide you through review, advising, and next steps.',
  },
]

const programOptions = [
  'Bachelor of Theology in Pastoral Studies',
  'Bachelor of Theology in Christian Education',
  'Bachelor of Theology in Youth Ministry',
  'Certificate of Ministry',
  'Still deciding',
]

function RequirementPanel({
  items,
  title,
}: {
  items: string[]
  title: string
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2020a0]">
            Checklist
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-950">{title}</h3>
        </div>
        <span className="bg-[#f0d030] px-3 py-1 text-xs font-semibold text-[#101080]">
          {items.length} items
        </span>
      </div>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-700" key={item}>
            <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center border border-[#2020a0]/40">
              <span className="h-1.5 w-1.5 bg-[#2020a0]" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

function EnrollNow() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.local.',
      )
      setStatus('error')
      return
    }

    const form = event.currentTarget
    setStatus('sending')

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Failed to send inquiry email:', error)
      setStatus('error')
    }
  }

  return (
    <section className="bg-[#f7f8fb] px-4 py-24 sm:px-6 lg:px-8" id="enroll-now">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Enroll now"
            text="Start with a short inquiry. MAABCI will guide applicants through document review, advising, and enrollment coordination."
            title="Admissions and Enrollment"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {admissionsSteps.map((step, index) => (
              <article className="rounded-xl border-l-4 border-[#2020a0] bg-white p-5 shadow-sm" key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            className="rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-950/[0.06]"
            onSubmit={handleSubmit}
          >
            <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2020a0]">
                    Inquiry Form
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    Applicant information
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-slate-500">
                  Fields marked here are for initial contact only. Final enrollment is
                  confirmed by the school office.
                </p>
              </div>
            </div>

            <div className="grid gap-5 px-6 py-7 sm:grid-cols-2 sm:px-8">
              <input name="to_email" type="hidden" value={INQUIRY_RECIPIENT_EMAIL} />
              <label className="block text-sm font-medium text-slate-700">
                Parent / Guardian Name
                <input
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  name="guardian_name"
                  placeholder="Full name"
                  required
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Student Name
                <input
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  name="student_name"
                  placeholder="Full name"
                  required
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
                <input
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  name="from_email"
                  placeholder="name@example.com"
                  required
                  type="email"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Contact Number
                <input
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  name="contact_number"
                  placeholder="Phone number"
                  type="tel"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Student Type
                <select
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  defaultValue=""
                  name="student_type"
                  required
                >
                  <option value="" disabled>
                    Select student type
                  </option>
                  <option>New Student</option>
                  <option>Transferee</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Program Interest
                <select
                  className="rounded-xl mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  defaultValue=""
                  name="program_interest"
                  required
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  {programOptions.map((program) => (
                    <option key={program}>{program}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Message
                <textarea
                  className="rounded-xl mt-2 min-h-32 w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#2020a0] focus:ring-4 focus:ring-[#2020a0]/10"
                  name="message"
                  placeholder="Questions, preferred schedule, or other details."
                />
              </label>
              <button
                className="rounded-xl bg-[#101080] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#101080]/20 transition hover:bg-[#2020a0] focus:outline-none focus:ring-4 focus:ring-[#2020a0]/25 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status === 'sending'}
                type="submit"
              >
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>

          <aside className="grid gap-5">
            <div className="rounded-xl border border-[#2020a0]/20 bg-[#101080] p-7 text-white shadow-xl shadow-[#101080]/15">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
                Before Applying
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">
                Prepare the documents that match your applicant type.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Bring original or certified copies when requested. The admissions
                office may ask for additional details during review.
              </p>
            </div>

            <RequirementPanel
              items={admissionRequirements.newStudents}
              title="New Students"
            />
            <RequirementPanel
              items={admissionRequirements.transferees}
              title="Transferees"
            />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default EnrollNow
