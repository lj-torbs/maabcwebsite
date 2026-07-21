import { reports } from '../data/schoolContent'

function ReportLinks() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {reports.map((report) => (
        <a
          className="rounded-lg border border-[#f0c000]/45 bg-[#fff8d7] px-4 py-3 text-sm font-normal leading-5 text-[#101080] shadow-sm shadow-[#101080]/5 transition hover:border-[#f0c000] hover:bg-[#fff0a8] focus:outline-none focus:ring-4 focus:ring-[#f0d030]/35"
          href={report.href}
          key={report.href}
          rel="noreferrer"
          target="_blank"
        >
          {report.title}
        </a>
      ))}
    </div>
  )
}

export default ReportLinks
