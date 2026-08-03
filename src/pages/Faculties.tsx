import { useState } from 'react'

type FacultyProfile = {
  image: string
  department: string
  name: string
  designation: string
}

const facultyProfiles: FacultyProfile[] = [
  { image: '/faculties/DSC_8216.jpg', department: 'Academic Department', name: 'Faculty Member 01', designation: 'Instructor' },
  { image: '/faculties/DSC_8243.jpg', department: 'Academic Department', name: 'Faculty Member 02', designation: 'Instructor' },
  { image: '/faculties/DSC_8251.jpg', department: 'Student Formation', name: 'Faculty Member 03', designation: 'Program Staff' },
  { image: '/faculties/DSC_8262.jpg', department: 'Academic Department', name: 'Faculty Member 04', designation: 'Instructor' },
  { image: '/faculties/DSC_8270.jpg', department: 'School Administration', name: 'Faculty Member 05', designation: 'Administrative Staff' },
  { image: '/faculties/DSC_8274.jpg', department: 'Academic Department', name: 'Faculty Member 06', designation: 'Instructor' },
  { image: '/faculties/DSC_8277.jpg', department: 'Student Formation', name: 'Faculty Member 07', designation: 'Program Staff' },
  { image: '/faculties/DSC_8281.jpg', department: 'Academic Department', name: 'Faculty Member 08', designation: 'Instructor' },
  { image: '/faculties/DSC_8283.jpg', department: 'School Administration', name: 'Faculty Member 09', designation: 'Administrative Staff' },
  { image: '/faculties/DSC_8300.JPG', department: 'Academic Department', name: 'Faculty Member 10', designation: 'Instructor' },
  { image: '/faculties/DSC_8303.jpg', department: 'Academic Department', name: 'Faculty Member 11', designation: 'Instructor' },
  { image: '/faculties/DSC_8316.JPG', department: 'Student Formation', name: 'Faculty Member 12', designation: 'Program Staff' },
  { image: '/faculties/DSC_8319.jpg', department: 'Academic Department', name: 'Faculty Member 13', designation: 'Instructor' },
]

// Get unique departments for filter options
const departments = ['All', ...new Set(facultyProfiles.map(member => member.department))]

function Faculties() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  // Filter faculty based on selected department
  const filteredFaculty = selectedDepartment === 'All'
    ? facultyProfiles
    : facultyProfiles.filter(member => member.department === selectedDepartment)

  return (
    <section className="bg-gradient-to-b from-white to-[#f7f8fb] px-4 py-16 sm:px-6 lg:px-8" id="faculties">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 sm:px-5 sm:py-2 sm:text-sm ${
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
        <p className="mt-4 text-center text-sm text-slate-500">
          Showing {filteredFaculty.length} {filteredFaculty.length === 1 ? 'member' : 'members'}
        </p>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFaculty.map((member) => (
            <article
              className="group flex flex-col items-center rounded-xl border border-slate-200/70 bg-white p-5 text-center shadow-sm shadow-slate-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-md hover:shadow-[#2020a0]/10"
              key={member.image}
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
    </section>
  )
}

export default Faculties
