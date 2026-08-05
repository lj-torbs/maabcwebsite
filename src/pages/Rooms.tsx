import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { publicAsset } from '../lib/publicAsset'

const campusZones = [
  {
    title: 'Administration',
    text: 'Leadership, registrar, finance, guidance, and support offices for school operations.',
    count: '9 spaces',
    image: publicAsset('rooms/PRESIDENTS OFFICE 1.webp'),
    alt: 'MAABCI President\'s Office',
  },
  {
    title: 'Learning & Worship',
    text: 'Rooms dedicated to instruction, chapel life, study, music, and community gatherings.',
    count: '8 spaces',
    image: publicAsset('rooms/LIBRARY 1.webp'),
    alt: 'MAABCI library',
  },
  {
    title: 'Residential Life',
    text: 'Housing and cottages that support students, faculty, and families.',
    count: '4 spaces',
    image: publicAsset('rooms/WOMENS DORM.webp'),
    alt: 'MAABCI women\'s dormitory',
  },
] satisfies { title: string; text: string; count: string; image: string; alt: string }[]

type RoomCard = {
  name: string
  purpose: string
  image: string
  alt: string
}

const roomCards = [
  {
    name: 'President\'s Office',
    purpose: 'The administrative office for school leadership and executive decisions.',
    image: 'PRESIDENTS OFFICE 1.webp',
    alt: 'MAABCI President\'s Office',
  },
  {
    name: 'Department of Academic Affairs Office',
    purpose: 'Handles academic programs, curriculum, and student scholastic records.',
    image: 'academic-deans-office.webp',
    alt: 'MAABCI academic dean\'s office',
  },
  {
    name: 'Department of Student Affairs Office',
    purpose: 'Manages student activities, guidance, and student life.',
    image: 'OFFICE OF THE DEAN OF_.webp',
    alt: 'MAABCI dean of student affairs office',
  },
  {
    name: 'General Services Office',
    purpose: 'Handles campus operations, maintenance, financial management, and daily administrative services.',
    image: 'GENERAL SERVICES OFFICE.webp',
    alt: 'MAABCI general services office',
  },
  {
    name: 'Business Office',
    purpose: 'Supports tuition payments, accounting, and campus financial transactions.',
    image: 'business-office.webp',
    alt: 'MAABCI business office',
  },
  {
    name: 'Registrar\'s Office',
    purpose: 'Assists with enrollment, records, transcripts, and official academic documents.',
    image: 'REGISTRARS OFFICE.webp',
    alt: 'MAABCI registrar\'s office',
  },
  {
    name: 'Guidance Office',
    purpose: 'Provides student guidance, counseling support, and personal development assistance.',
    image: 'GUIDANCE OFFICE.webp',
    alt: 'MAABCI guidance office',
  },
  {
    name: 'Dean of Ladies Office',
    purpose: 'Supports women students through mentoring, dorm life coordination, and campus care.',
    image: 'dean-of-ladies-office.webp',
    alt: 'MAABCI dean of ladies office',
  },
  {
    name: 'Chapel',
    purpose: 'The spiritual center of campus used for worship services, prayer gatherings, and fellowship.',
    image: 'chapel.webp',
    alt: 'MAABCI chapel',
  },
  {
    name: 'Classrooms',
    purpose: 'Dedicated spaces for daily instruction, group learning, and academic focus.',
    image: 'classroom-1.webp',
    alt: 'MAABCI classroom',
  },
  {
    name: 'Gymnasium',
    purpose: 'A multi-purpose venue for sports, school gatherings, and events.',
    image: 'GYMNASIUM.webp',
    alt: 'MAABCI gymnasium',
  },
  {
    name: 'Library',
    purpose: 'A quiet study and research space with learning resources for students and faculty.',
    image: 'LIBRARY 1.webp',
    alt: 'MAABCI library',
  },
  {
    name: 'Music Room',
    purpose: 'A dedicated area for music instruction, rehearsals, worship preparation, and practice.',
    image: 'MUSIC ROOM.webp',
    alt: 'MAABCI music room',
  },
  {
    name: 'Life Formation Academy',
    purpose: 'A formation and training space for character development, instruction, and ministry preparation.',
    image: 'LIFE FORMATION ACADEMY.webp',
    alt: 'MAABCI Life Formation Academy',
  },
  {
    name: 'Stanita Hall',
    purpose: 'A campus hall used for gatherings, activities, meetings, and shared community events.',
    image: 'STANITA HALL 1.webp',
    alt: 'MAABCI Stanita Hall',
  },
  {
    name: 'Canteen',
    purpose: 'Campus dining area providing meals and refreshments for students and staff.',
    image: 'canteen.webp',
    alt: 'MAABCI canteen',
  },
  {
    name: 'Public CR',
    purpose: 'Shared restroom facilities that support students, staff, and campus visitors.',
    image: 'PUBLIC CR.webp',
    alt: 'MAABCI public comfort room',
  },
  {
    name: 'Men\'s Dormitory',
    purpose: 'On-campus housing for male students.',
    image: 'MENS DORM.webp',
    alt: 'MAABCI men\'s dormitory',
  },
  {
    name: 'Women\'s Dormitory',
    purpose: 'On-campus housing for female students.',
    image: 'WOMENS DORM.webp',
    alt: 'MAABCI women\'s dormitory',
  },
  {
    name: 'Faculty House',
    purpose: 'On-campus living quarters for faculty members and teachers.',
    image: 'faculty-house.webp',
    alt: 'MAABCI faculty house',
  },
  {
    name: 'Couples\' House',
    purpose: 'Residential accommodations for married students and staff families.',
    image: 'couples-house-newly-built.webp',
    alt: 'MAABCI couples house',
  },
].map(({ image, ...room }) => ({
  ...room,
  image: publicAsset(`rooms/${image}`),
})) satisfies RoomCard[]

function Rooms() {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f7f8fb] to-white px-4 py-24 sm:px-6 lg:px-8" id="rooms">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Our Campus"
            text="Our campus provides practical spaces for students, faculty, and the wider school community to study, worship, gather, and reside."
            title="A Campus Built Around Daily Formation"
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {campusZones.map((zone) => (
              <article
                className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/[0.04]"
                key={zone.title}
              >
                <button
                  aria-label={`Enlarge photo of ${zone.title}`}
                  className="block w-full cursor-pointer"
                  onClick={() => setPreviewImage({ src: zone.image, alt: zone.alt })}
                  type="button"
                >
                  <img
                    src={zone.image}
                    alt={zone.alt}
                    className="h-28 w-full object-cover"
                    loading="lazy"
                  />
                </button>
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-950">{zone.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#2020a0]">
                    {zone.count}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{zone.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl mt-14 grid overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-950/[0.07] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <button
              aria-label="Enlarge photo of MAABCI campus walkway"
              className="absolute inset-0 h-full w-full cursor-pointer"
              onClick={() =>
                setPreviewImage({
                  src: publicAsset('Copy of DSC_1389.JPG'),
                  alt: 'MAABCI campus walkway',
                })
              }
              type="button"
            >
              <img
                src={publicAsset('Copy of DSC_1389.JPG')}
                alt="MAABCI campus walkway"
                className="h-full w-full object-cover"
              />
            </button>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b60]/85 via-[#0b0b60]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d030]">
                Campus Life
              </p>
              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Spaces for worship, instruction, service, and shared community.
              </h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0b0b60] via-[#101080] to-[#2020a0] p-7 text-white sm:p-9 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d030]">
              Facility Directory
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Practical rooms that support the full rhythm of school life.
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/75">
              MAABCI&apos;s campus combines offices, classrooms, chapel space,
              student gathering areas, and residential facilities into one daily
              environment for ministry preparation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-[#f0d030]">{roomCards.length}</p>
                <p className="mt-1 text-sm text-white/75">listed campus spaces</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-[#f0d030]">1</p>
                <p className="mt-1 text-sm text-white/75">shared campus community</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roomCards.map((room, index) => (
            <article
              className="rounded-xl group overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-xl hover:shadow-[#2020a0]/10"
              key={room.name}
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <button
                  aria-label={`Enlarge photo of ${room.name}`}
                  className="block h-full w-full cursor-pointer"
                  onClick={() => setPreviewImage({ src: room.image, alt: room.alt })}
                  type="button"
                >
                  <img
                    src={room.image}
                    alt={room.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b60]/60 via-transparent to-transparent" />
                <span className="rounded-xl absolute bottom-4 right-4 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#101080] shadow-lg shadow-black/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-tight text-slate-950 transition-colors group-hover:text-[#2020a0]">
                  {room.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{room.purpose}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            aria-label="Close enlarged photo"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/25"
            onClick={() => setPreviewImage(null)}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
          <img
            alt={previewImage.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            src={previewImage.src}
          />
        </div>
      )}
    </section>
  )
}

export default Rooms
