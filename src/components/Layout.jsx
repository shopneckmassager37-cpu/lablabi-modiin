import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'בית',      to: '/' },
  { label: 'תפריט',    to: '/menu' },
  { label: 'אודות',    to: '/about' },
  { label: 'ביקורות', to: '/reviews' },
  { label: 'צור קשר', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        dir="rtl"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-[#1a0a00]/96 backdrop-blur-xl border-b border-[#f5a623]/15 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f5a623] to-[#c8860a] flex items-center justify-center shadow-[0_0_14px_rgba(245,166,35,0.35)]">
              <svg className="w-4 h-4 text-[#1a0a00]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-base leading-tight tracking-wide">חומוס לבלבי</div>
              <div className="text-[#f5a623] text-xs font-medium">מודיעין</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV.map(({ label, to }) => (
              <Link key={to} to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === to
                    ? 'bg-[#f5a623]/15 text-[#f5a623]'
                    : 'text-white/65 hover:text-white hover:bg-white/5'
                }`}>
                {label}
              </Link>
            ))}
            <a href="tel:072-3930492"
              className="mr-3 px-5 py-2 bg-[#f5a623] text-[#1a0a00] text-sm font-bold rounded-full hover:bg-[#ffc045] hover:shadow-[0_0_18px_rgba(245,166,35,0.4)] active:scale-95 transition-all">
              072-3930492
            </a>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="תפריט">
            <span className={`block w-5 h-[2px] bg-white rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        dir="rtl"
        className={`fixed inset-0 z-40 md:hidden bg-[#1a0a00]/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-3 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {NAV.map(({ label, to }, i) => (
          <Link key={to} to={to} onClick={() => setOpen(false)}
            className="text-3xl font-bold text-white/75 hover:text-[#f5a623] transition-colors py-2"
            style={{ transitionDelay: open ? `${i * 50 + 80}ms` : '0ms' }}>
            {label}
          </Link>
        ))}
        <a href="tel:072-3930492"
          className="mt-5 px-10 py-3.5 bg-[#f5a623] text-[#1a0a00] font-bold text-lg rounded-full hover:bg-[#ffc045] transition-all">
          התקשרו עכשיו
        </a>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer dir="rtl" className="bg-[#100500] border-t border-[#f5a623]/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        <div>
          <div className="text-white font-bold text-sm mb-1">חומוס לבלבי מודיעין</div>
          <div className="text-white/30 text-xs">עמק זבולון 24, מרכז קייזר, קומה עליונה</div>
        </div>
        <div className="text-white/25 text-xs leading-relaxed">
          א׳–ה׳: 11:00–19:30 | שישי: 10:00–15:00<br />
          כשר פרווה · ללא גלוטן · בהשגחת רבנות מודיעין
        </div>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/humuslablabi" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-[#f5a623] text-sm transition-colors">Facebook</a>
          <a href="https://www.instagram.com/hummus_lablabi/" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-[#f5a623] text-sm transition-colors">Instagram</a>
          <a href="https://wolt.com/he/isr/modiin/restaurant/hummus-lablabi" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-[#f5a623] text-sm transition-colors">Wolt</a>
        </div>
      </div>
    </footer>
  )
}
