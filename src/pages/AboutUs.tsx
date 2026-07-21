import InfoCard from '../components/InfoCard'
import type { IconName } from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import { values } from '../data/schoolContent'
import { useRef, useState } from 'react'

const icons: Record<string, IconName> = {
  'Faith-guided character': 'compass',
  'Academic confidence': 'target',
  'Family partnership': 'users',
}

function AboutUs() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 perspective-1000" id="about-us">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="About us"
            text="MAABC brings education, family involvement, and community service into one organized school experience."
            title="A school community built around faith and service."
          />

          {/* Interactive 3D Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative overflow-hidden rounded-2xl border border-[#f0c000]/30 bg-gradient-to-br from-[#fff8d7] to-[#fff0c0] p-8 shadow-lg shadow-[#f0c000]/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#f0c000]/20"
            style={{
              transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
            }}
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f0c000]/10 blur-3xl group-hover:scale-110 transition-transform duration-500" />

            <div
              className="relative transition-transform duration-500"
              style={{
                transform: `translateZ(20px)`,
              }}
            >
              <p className="relative text-lg leading-relaxed text-slate-800">
                MAABC supports learners through clear instruction, student guidance,
                school programs, and a campus culture shaped by service and shared
                values.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600 border-t border-[#f0c000]/20 pt-4">
                Each page section is separated into its own React file so school
                content can grow without turning the application into one large
                component.
              </p>
            </div>

            {/* Glare effect */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                transform: 'translateZ(30px)',
              }}
            />
          </div>
        </div>

        {/* 3D Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                transitionDelay: `${index * 50}ms`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-2xl bg-[#f0c000]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(-10px)',
                  }}
                />
                <InfoCard
                  text={item.text}
                  title={item.title}
                  icon={icons[item.title] ?? 'pin'}
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    transform: 'translateZ(5px)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
