import Icon, { type IconName } from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import { rooms } from '../data/schoolContent'

const roomIcons: Record<string, IconName> = {
  'Main Classroom': 'book',
  'Quran Room': 'flag',
  'Multipurpose Hall': 'building',
  'Activity Room': 'palette',
}

function Rooms() {
  return (
    <section className="bg-gradient-to-b from-[#f7f8fb] to-white px-4 py-24 sm:px-6 lg:px-8" id="rooms">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Rooms"
            text="Facilities are listed by use case so parents, students, volunteers, and donors understand how each room supports learning."
            title="Purpose-built spaces for school programs."
          />

          <div className="grid gap-4">
            {rooms.map((room) => (
              <article
                className="group grid gap-4 rounded-xl border border-slate-200/60 bg-white p-6 shadow-lg shadow-slate-950/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2020a0]/30 hover:shadow-xl hover:shadow-[#2020a0]/10 sm:grid-cols-[1fr_auto] sm:items-center"
                key={room.name}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2020a0]/10 text-[#2020a0]">
                    <Icon name={roomIcons[room.name] ?? 'pin'} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#2020a0] transition-colors">
                      {room.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {room.purpose}
                    </p>
                  </div>
                </div>
                <span className="flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[#101080]/10 to-[#2020a0]/10 px-4 py-2 text-xs font-semibold text-[#101080]">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {room.capacity}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms
