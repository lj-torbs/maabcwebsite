import { navItems, schoolName, schoolSubtitle } from '../../data/schoolContent'
import { useState, useEffect } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-xl border-b border-slate-200"
          : "bg-white/10 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-4 rounded-xl focus:outline-none"
        >
          <div
            className={`flex h-15 w-15 items-center justify-center rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white shadow-lg"
                : "bg-white/90 backdrop-blur-md shadow-xl"
            }`}
          >
            <img
              src="/c5e2c9a4-e815-44c2-a04a-ea4fdf93ca98.png"
              alt="MAABC Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div>
            <h1
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-[#101080]" : "text-white"
              }`}
            >
              {schoolName}
            </h1>

            <p
              className={`hidden xl:block text-xs uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-slate-500" : "text-white/70"
              }`}
            >
              {schoolSubtitle}
            </p>
          </div>
        </a>

        <nav
          className="hidden lg:flex items-center gap-2"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-slate-700 hover:text-[#f0d030]"
                  : "text-white/90 hover:text-[#f0d030]"
              }`}
            >
              {item.label}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[#f0d030]
                  transition-all
                  duration-300
                  group-hover:w-3/4
                "
              />

              <span
                className="
                  absolute
                  inset-0
                  rounded-lg
                  bg-[#f0d030]/10
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              />
            </a>
          ))}
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative grid h-11 w-11 place-items-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#f0d030]/35 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'max-h-[28rem] border-t border-slate-200/60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 bg-white px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <a
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#101080] focus:outline-none focus:ring-4 focus:ring-[#f0d030]/35"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
