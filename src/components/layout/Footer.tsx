import ReportLinks from '../ReportLinks'
import Icon from '../Icon'
import { contactDetails, schoolFullName, schoolName, schoolSubtitle, socialLinks } from '../../data/schoolContent'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b0b60] to-[#101080] px-4 py-12 text-white sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#f0d030]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#2020a0]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d030]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f0d030] text-lg font-bold text-[#101080] shadow-lg shadow-[#f0d030]/20">
                M
              </span>
              <p className="text-2xl font-bold tracking-tight">{schoolName}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{schoolFullName}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/70">{contactDetails.location}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#f0d030]">{schoolSubtitle}</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
              Contact Us
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{contactDetails.email}</li>
              <li>{contactDetails.location}</li>
              <li>{contactDetails.hours}</li>
            </ul>
            <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
              Connect With Us
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon name="users" className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
              School updates
            </p>
            <ReportLinks />
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {schoolFullName} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
