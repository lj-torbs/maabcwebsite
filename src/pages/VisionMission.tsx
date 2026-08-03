import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import { mission, vision } from '../data/schoolContent'
import { useRef, useState } from 'react'

const praiseValues = ['Prayerfulness', 'Relationship', 'Accountability', 'Integrity', 'Submission', 'Excellence']

function VisionMission() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0b0b60] to-[#101080] px-4 py-24 text-white sm:px-6 lg:px-8 perspective-1000"
      id="vision-mission"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#f0d030]/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#2020a0]/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d030]/5 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Watermark logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <img
          src="/c5e2c9a4-e815-44c2-a04a-ea4fdf93ca98.png"
          alt=""
          className="h-[600px] w-[600px] object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Vision and mission"
            light
            text="A focused statement section for the school's purpose, learning culture, and community responsibility."
            title="Clear purpose for students and families."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {/* Vision Card with 3D hover */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/30"
              style={{
                transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
              }}
            >
              {/* Background glow with 3D depth */}
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f0d030]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f0d030]/20"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              />

              {/* Inner glow layer */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(10px)',
                }}
              />

              <div
                className="relative"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f0d030]/15 text-[#f0d030] transition-all duration-300 group-hover:bg-[#f0d030]/25 group-hover:scale-110 group-hover:rotate-3">
                    <Icon name="target" className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#f0d030] group-hover:scale-105 transition-transform duration-300">
                    Vision
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-white/85 group-hover:text-white/95 transition-colors duration-300">
                  {vision}
                </p>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  transform: 'translateZ(30px)',
                }}
              />
            </div>

            {/* Mission Card with 3D hover */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 hover:scale-[1.01]">
              {/* Background glow with 3D depth */}
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f0d030]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f0d030]/20"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              />

              {/* Inner glow layer */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(10px)',
                }}
              />

              <div
                className="relative"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f0d030]/15 text-[#f0d030] transition-all duration-300 group-hover:bg-[#f0d030]/25 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon name="rocket" className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#f0d030] group-hover:scale-105 transition-transform duration-300">
                    Mission
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-white/85 group-hover:text-white/95 transition-colors duration-300">
                  {mission}
                </p>
              </div>

              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  transform: 'translateZ(30px)',
                }}
              />
            </div>

            {/* Optional 3rd card - Core Values */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 hover:scale-[1.01] lg:col-span-1">
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f0d030]/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f0d030]/15"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              />

              <div
                className="relative"
                style={{
                  transform: 'translateZ(20px)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-white/70 transition-all duration-300 group-hover:bg-white/15 group-hover:scale-110">
                    <Icon name="heart" className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-white/90 group-hover:scale-105 transition-transform duration-300">
                    PRAISE Core Values
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {praiseValues.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/90"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  transform: 'translateZ(30px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes in a style tag or your global CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default VisionMission
