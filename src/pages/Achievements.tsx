import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'

function Achievements() {
  const accomplishments = [
    {
      icon: 'book',
      title: 'Academic Excellence',
      description: 'Improved passing rates by 25% and established honors programs across all grade levels.'
    },
    {
      icon: 'building',
      title: 'Infrastructure Development',
      description: 'Constructed new science laboratories, library expansion, and upgraded sports facilities.'
    },
    {
      icon: 'users',
      title: 'Community Partnerships',
      description: 'Established 15+ local business partnerships for student internships and scholarships.'
    },
    {
      icon: 'graduation',
      title: 'Faculty Development',
      description: 'Implemented professional development programs with 90% teacher participation rate.'
    },
    {
      icon: 'phone',
      title: 'Awards & Recognition',
      description: 'Received 12 regional and national awards for academic and extracurricular excellence.'
    },
    {
      icon: 'rocket',
      title: 'Technology Integration',
      description: 'Launched digital learning platforms and provided devices to 500+ students.'
    }
  ]


  //Add presidents statements

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8" id="achievements">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          eyebrow="Achievements"
          text="Highlights from academic growth, student support, facilities, and community engagement."
          title="School progress worth celebrating."
        />

        {/* President Section - Big Photo Left, Info Right */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0b60] to-[#151590] shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left - President Photo */}
            <div className="relative h-[400px] md:h-auto">
              <img
                src="/Presidnt.jpg"
                alt="Dr. Ruel D. Invidiado - School President"
                className="h-full w-full object-cover object-top"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/60 via-transparent to-transparent md:bg-gradient-to-r" />

              {/* Photo Caption */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
                <h3 className="text-2xl font-bold text-white">Dr. Ruel D. Invidiado</h3>
                <p className="text-sm text-white/80">MAABC President • 2000-Present</p>
              </div>
            </div>

            {/* Right - Image Collage */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <div className="mb-2 inline-block rounded-full bg-[#f0c000]/20 px-3 py-1 text-xs font-semibold text-[#f0c000]">
                  Presidential Legacy
                </div>
                <h3 className="text-2xl font-bold text-white">A Decade of Progress</h3>
                <p className="mt-2 text-sm text-white/70">
                  Under his leadership, the school has achieved remarkable
                  growth across all areas of academic and institutional development.
                </p>
              </div>

              {/* Image Collage - Using CDN */}
              <div className="grid grid-cols-4 gap-3">
                {/* Large Featured Image - Academic Excellence */}
                <div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop"
                    alt="Academic Achievement"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-sm font-semibold text-white">Academic Excellence</p>
                    <p className="text-xs text-white/70">25% passing rate increase</p>
                  </div>
                </div>

                {/* Community Partners */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=300&h=200&fit=crop"
                    alt="Community Partners"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">15+ Community Partners</p>
                  </div>
                </div>

                {/* Awards */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop"
                    alt="Awards"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">12 Awards Received</p>
                  </div>
                </div>

                {/* Students Impacted */}
                <div className="relative col-span-2 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=200&fit=crop"
                    alt="Students Impacted"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-sm font-semibold text-white">500+ Students Impacted</p>
                  </div>
                </div>

                {/* Facilities */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop"
                    alt="Facilities"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">New Facilities</p>
                  </div>
                </div>

                {/* Technology */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop"
                    alt="Technology"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">Digital Learning</p>
                  </div>
                </div>

                {/* Sports Achievement */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-bd2a7b8a8b5a?w=300&h=200&fit=crop"
                    alt="Sports Achievements"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">🏆 8 Sports Championships</p>
                  </div>
                </div>

                {/* Scholarships */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop"
                    alt="Scholarships"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">100+ Scholarships Awarded</p>
                  </div>
                </div>

                {/* Faculty Development */}
                <div className="relative col-span-2 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=200&fit=crop"
                    alt="Faculty Development"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-sm font-semibold text-white">Faculty Development Programs</p>
                    <p className="text-xs text-white/70">90% teacher participation rate</p>
                  </div>
                </div>

                {/* Research Initiatives */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop"
                    alt="Research"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">🔬 30+ Research Papers</p>
                  </div>
                </div>

                {/* International Partners */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop"
                    alt="International Partners"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">🌍 10 International Partners</p>
                  </div>
                </div>

                {/* Alumni Success */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop"
                    alt="Alumni Success"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">🎓 500+ Alumni Network</p>
                  </div>
                </div>

                {/* Community Outreach */}
                <div className="relative col-span-2 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=200&fit=crop"
                    alt="Community Outreach"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-sm font-semibold text-white">Community Outreach Programs</p>
                    <p className="text-xs text-white/70">Serving 2000+ community members</p>
                  </div>
                </div>

                {/* Student Leadership */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop"
                    alt="Student Leadership"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">👥 Student Leadership Program</p>
                  </div>
                </div>

                {/* Arts & Culture */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                    alt="Arts and Culture"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b60]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <p className="text-xs font-semibold text-white">🎭 20+ Cultural Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accomplishments Breakdown Grid - Auto Animated Version */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#0b0b60]">Key Accomplishments</h3>
            <p className="text-sm text-gray-500">A breakdown of major achievements during the president's term</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {accomplishments.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#f0c000]/15"
                style={{
                  animation: `floatCard ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                {/* Decorative background element */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#f0c000]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f0c000]/10" />

                <div className="relative">
                  <div
                    className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0c000]/20 to-[#f0c000]/5 text-[#0b0b60] transition-all duration-300 group-hover:scale-110 group-hover:from-[#f0c000] group-hover:to-[#f0d030] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#f0c000]/30"
                    style={{
                      animation: `pulseIcon ${2 + index * 0.3}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 font-semibold text-[#0b0b60] group-hover:text-[#0b0b60]/90">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes pulseIcon {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Achievements
