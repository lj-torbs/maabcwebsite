import { useState } from 'react'
import { publicAsset } from '../lib/publicAsset'

type FacultyProfile = {
  image: string
  department: string
  name: string
  designation: string
}

const facultyProfiles: FacultyProfile[] = [
  { image: publicAsset('faculties/Invidiado.jpg'), department: 'School Administration', name: 'Dr. Ruel D. Invidiado', designation: 'President' },
  { image: publicAsset('faculties/Abantes.jpg'), department: 'School Administration', name: 'LM Edna M. Abantes', designation: 'Academic Dean' },
  { image: publicAsset('faculties/TorilloHusband.jpg'), department: 'Student Formation', name: 'Rev. Aldrin E. Torillo', designation: 'Dean of Student Affairs' },
  { image: publicAsset('faculties/PrestoHusband.jpg'), department: 'School Administration', name: 'Rev. Brixander E. Presto', designation: 'General Services Manager' },
  { image: publicAsset('faculties/Panal.jpg'), department: 'School Administration', name: 'Ms. Maricar O. Panal', designation: 'Guidance Counselor' },
  { image: publicAsset('faculties/Caracol.jpg'), department: 'School Administration', name: 'LM Clara U. Caracol', designation: 'Registrar' },
  { image: publicAsset('faculties/InvidiadoWife.jpg'), department: 'Student Formation', name: 'Mrs. Rizabelle R. Invidiado', designation: 'Librarian' },
  { image: publicAsset('faculties/Torillo.jpg'), department: 'Academic Department', name: 'LM Mary Jane B. Torillo', designation: 'Music Director' },
  { image: publicAsset('faculties/CaracolHusband.jpg'), department: 'Student Formation', name: 'Rev. Jeger O. Caracol', designation: 'Men Minister' },
  { image: publicAsset('faculties/Presto.jpg'), department: 'Student Formation', name: 'LM Julie Cel P. Presto', designation: 'Ladies Minister' },
  { image: publicAsset('faculties/Gaspar.jpg'), department: 'School Administration', name: 'Ms. Krisha Eden Faye Gaspar', designation: 'Cashier' },
  { image: publicAsset('faculties/Saladar.jpg'), department: 'School Administration', name: 'Ms. Mishel O. Saladar', designation: 'Bookkeeper' },
  { image: publicAsset('faculties/Trabado.jpg'), department: 'Academic Department', name: 'LM Jovelyn P. Trabado', designation: 'Preschool Teacher' },
]

// Get unique departments for filter options
const departments = ['All', ...new Set(facultyProfiles.map(member => member.department))]

function Faculties() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  // Filter faculty based on selected department
  const filteredFaculty = selectedDepartment === 'All'
    ? facultyProfiles
    : facultyProfiles.filter(member => member.department === selectedDepartment)
  const president = facultyProfiles.find(member => member.designation === 'President')
  const gridFaculty = selectedDepartment === 'All' && president
    ? filteredFaculty.filter(member => member !== president)
    : filteredFaculty

  return (
    <section className="bg-gradient-to-b from-white to-[#f7f8fb] px-4 py-16 sm:px-6 lg:px-8" id="faculties">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="faculty-fade-up mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#2020a0]/25" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2020a0]">
              Faculties
            </p>
            <span className="h-px w-8 bg-[#2020a0]/25" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            Faculty and Staff
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Meet the faithful teachers and leaders who guide, mentor, and inspire our students every day.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="faculty-fade-up mt-8 flex flex-wrap items-center justify-center gap-2" style={{ animationDelay: '80ms' }}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#2020a0]/15 sm:px-5 sm:py-2 sm:text-sm ${
                selectedDepartment === dept
                  ? 'bg-[#2020a0] text-white shadow-md shadow-[#2020a0]/25'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-[#2020a0]/30 hover:bg-[#f7f8fb]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="faculty-fade-up mt-4 text-center text-sm text-slate-500" style={{ animationDelay: '140ms' }}>
          Showing {filteredFaculty.length} {filteredFaculty.length === 1 ? 'member' : 'members'}
        </p>

        {selectedDepartment === 'All' && president && (
          <div className="mt-6 flex justify-center" key={`president-${selectedDepartment}`}>
            <article
              className="faculty-fade-up group flex w-full max-w-xs flex-col items-center rounded-xl border border-[#2020a0]/20 bg-white p-5 text-center shadow-md shadow-[#2020a0]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-lg hover:shadow-[#2020a0]/15"
              key={president.image}
              style={{ animationDelay: '200ms' }}
            >
              <div className="h-40 w-40 overflow-hidden rounded-full bg-slate-100 ring-2 ring-[#f0d030]/50 transition-all duration-300 group-hover:ring-[#2020a0]/30">
                <img
                  alt={president.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  src={president.image}
                />
              </div>
              <div className="mt-3 w-full">
                <p className="truncate text-xs font-semibold uppercase tracking-[0.08em] text-[#2020a0] sm:text-sm">
                  {president.department}
                </p>
                <h3 className="mt-1 truncate text-base font-semibold leading-tight text-slate-950 sm:text-lg">
                  {president.name}
                </h3>
                <p className="mt-0.5 truncate text-sm text-slate-600 sm:text-base">
                  {president.designation}
                </p>
              </div>
            </article>
          </div>
        )}

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4" key={`faculty-grid-${selectedDepartment}`}>
          {gridFaculty.map((member, index) => (
            <article
              className="faculty-fade-up group flex flex-col items-center rounded-xl border border-slate-200/70 bg-white p-5 text-center shadow-sm shadow-slate-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-md hover:shadow-[#2020a0]/10"
              key={member.image}
              style={{ animationDelay: `${260 + index * 45}ms` }}
            >
              <div className="h-36 w-36 overflow-hidden rounded-full bg-slate-100 ring-2 ring-[#f0d030]/30 transition-all duration-300 group-hover:ring-[#2020a0]/30 sm:h-36 sm:w-36 md:h-40 md:w-40">
                <img
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  src={member.image}
                />
              </div>
              <div className="mt-3 w-full">
                <p className="truncate text-xs font-semibold uppercase tracking-[0.08em] text-[#2020a0] sm:text-sm">
                  {member.department}
                </p>
                <h3 className="mt-1 truncate text-base font-semibold leading-tight text-slate-950 sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-0.5 truncate text-sm text-slate-600 sm:text-base">
                  {member.designation}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredFaculty.length === 0 && (
          <div className="mt-10 text-center py-12">
            <p className="text-slate-500">No faculty members found in this department.</p>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes facultyFadeUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .faculty-fade-up {
            animation: facultyFadeUp 520ms ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .faculty-fade-up {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  )
}

export default Faculties
