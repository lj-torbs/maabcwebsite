import SectionHeader from '../components/SectionHeader'
import { rooms } from '../data/schoolContent'

const campusZones = [
  {
    title: 'Administration',
    text: 'Leadership and support offices for school operations.',
    count: '4 spaces',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    alt: 'Administrative office workspace',
  },
  {
    title: 'Learning & Worship',
    text: 'Rooms dedicated to study, chapel life, and community gatherings.',
    count: '4 spaces',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    alt: 'Study space with bookshelves',
  },
  {
    title: 'Residential Life',
    text: 'Housing and cottages that support students, faculty, and families.',
    count: '4 spaces',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    alt: 'Residential room interior',
  },
] satisfies { title: string; text: string; count: string; image: string; alt: string }[]

const roomPhotoFallback = {
  src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  alt: 'Campus facility space',
}

function getRoomPhoto(roomName: string) {
  if (roomName.includes('President')) {
    return {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      alt: 'Leadership meeting room',
    }
  }

  if (roomName.includes('Academic')) {
    return {
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
      alt: 'Academic office and books',
    }
  }

  if (roomName.includes('Student')) {
    return {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
      alt: 'Students gathered together',
    }
  }

  if (roomName.includes('General')) {
    return {
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      alt: 'Administrative planning workspace',
    }
  }

  if (roomName.includes('Chapel')) {
    return {
      src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80',
      alt: 'Chapel worship space',
    }
  }

  if (roomName.includes('Classrooms')) {
    return {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
      alt: 'Classroom learning space',
    }
  }

  if (roomName.includes('Gymnasium')) {
    return {
      src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
      alt: 'Indoor gymnasium court',
    }
  }

  if (roomName.includes('Canteen')) {
    return {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
      alt: 'Campus dining area',
    }
  }

  if (roomName.includes('Dormitory')) {
    return {
      src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
      alt: 'Student dormitory room',
    }
  }

  if (roomName.includes('Cottages')) {
    return {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      alt: 'Residential cottage room',
    }
  }

  return roomPhotoFallback
}

function Rooms() {
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
                className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/[0.04]"
                key={zone.title}
              >
                <img
                  src={zone.image}
                  alt={zone.alt}
                  className="h-28 w-full object-cover"
                  loading="lazy"
                />
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

        <div className="mt-14 grid overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-950/[0.07] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <img
              src="/Copy of DSC_1389.JPG"
              alt="MAABCI campus walkway"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/85 via-[#0b0b60]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
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
              <div className="border border-white/15 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-[#f0d030]">{rooms.length}</p>
                <p className="mt-1 text-sm text-white/75">listed campus spaces</p>
              </div>
              <div className="border border-white/15 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-[#f0d030]">1</p>
                <p className="mt-1 text-sm text-white/75">shared campus community</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => {
            const photo = getRoomPhoto(room.name)

            return (
              <article
                className="group overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#2020a0]/30 hover:shadow-xl hover:shadow-[#2020a0]/10"
                key={room.name}
              >
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 right-4 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#101080] shadow-lg shadow-black/10">
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Rooms
