import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'

const IconBowl = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M12 3v.75M6.22 4.97l.53.53M17.78 4.97l-.53.53M21 9c0 5.25-4.03 9.56-9.17 9.93A.75.75 0 0112 18h0a.75.75 0 01-.83-.07C6.03 18.56 3 14.25 3 9" />
  </svg>
)

const IconChef = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75A6.75 6.75 0 012.25 10.5v0c0 1.243.337 2.408.925 3.41L4.5 21h15l1.325-7.09A6.735 6.735 0 0021.75 10.5v0A6.75 6.75 0 0015 3.75H9z" />
  </svg>
)

const IconLeaf = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9 0 3.72-2.26 6.91-5.5 8.29V21H8.5v-.71C5.26 18.91 3 15.72 3 12c0-4.97 4.03-9 9-9z" />
  </svg>
)

const IconFire = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.545 5.975 5.975 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
)

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a00]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00] via-[#2d1200] to-[#1a0a00]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#f5a623]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c8860a]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #f5a623 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" dir="rtl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/8 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
          <span className="text-[#f5a623] text-xs font-medium tracking-widest">כשר פרווה · ללא גלוטן · מרכז קייזר מודיעין</span>
        </div>

        <h1 className="font-black leading-[1.05] mb-6">
          <span className="block text-white text-6xl sm:text-7xl md:text-8xl">חומוס לבלבי</span>
          <span className="block text-[#f5a623] text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">הטעם האמיתי של פעם</span>
        </h1>

        <p className="text-white/45 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          חומוס טרי שמוכן מדי יום, פלאפל פריך, וסלטים ביתיים —
          מתכון משפחתי שעבר דורות, מוגש באהבה אמיתית.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/menu"
            className="w-full sm:w-auto px-8 py-4 bg-[#f5a623] text-[#1a0a00] font-bold text-sm rounded-full hover:bg-[#ffc045] hover:shadow-[0_0_32px_rgba(245,166,35,0.45)] active:scale-95 transition-all duration-200 tracking-wide">
            לתפריט המלא ←
          </Link>
          <a href="https://wolt.com/he/isr/modiin/restaurant/hummus-lablabi" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/15 text-white/70 font-medium text-sm rounded-full hover:border-[#f5a623]/30 hover:text-white transition-all duration-200">
            הזמנה דרך Wolt
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-16 sm:gap-24">
          {[
            { v: '9+',       l: 'שנות ניסיון' },
            { v: 'טרי',      l: 'מדי בוקר' },
            { v: 'ללא גלוטן', l: 'חומוס ופלאפל' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <div className="text-[#f5a623] text-2xl sm:text-3xl font-black">{v}</div>
              <div className="text-white/30 text-xs sm:text-sm mt-1 tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function Highlights() {
  const items = [
    { Icon: IconBowl,  title: 'חומוס טרי',      desc: 'נטחן על הרגע מגרגרים איכותיים. לא מאתמול, לא מקופסה — תמיד טרי.' },
    { Icon: IconChef,  title: 'פלאפל ביתי',     desc: 'מוכן מדי בוקר — פריך מבחוץ, רך מבפנים. המתכון המקורי של המשפחה.' },
    { Icon: IconLeaf,  title: 'סלטים ביתיים',   desc: 'מבחר סלטים שמוכנים כל יום במטבח. תוספות שמשלימות כל מנה.' },
    { Icon: IconFire,  title: 'פיתה חמה',        desc: 'ישירות מהתנור לצלחת שלכם — חמה ורכה בכל הגשה.' },
  ]

  return (
    <section className="bg-[#1a0a00] py-28" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">מה אנחנו מגישים</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">האוכל שמדברים עליו</h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">כל מה שעל הצלחת — עשוי בידיים, מכל הלב.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, desc }) => (
            <div key={title}
              className="group rounded-2xl border border-white/8 bg-[#2d1200]/40 p-7 flex flex-col gap-5 hover:border-[#f5a623]/30 hover:bg-[#2d1200]/70 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center text-[#f5a623] group-hover:bg-[#f5a623]/15 transition-colors">
                <Icon />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsStrip() {
  const snippets = [
    { name: 'מיכל ר.', text: 'חומוס מהטעמים שהכי מזכירים לי את ירושלים. הגעתי פעם אחת ובאתי שוב באותו שבוע.' },
    { name: 'אבי כ.',  text: 'סוף סוף מקום שמבין מה זה חומוס אמיתי במודיעין. השירות אישי ומשפחתי. ממליץ בחום.' },
    { name: 'שרה מ.', text: 'חזרתי כבר 4 פעמים. הסלטים ביתיים לגמרי, החמוצים נהדרים, והפלאפל — וואו.' },
  ]
  return (
    <section className="bg-[#140800] py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">לקוחות מרוצים</span>
          <h2 className="text-3xl md:text-4xl font-black text-white">מה אומרים עלינו</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {snippets.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/8 bg-[#2d1200]/40 p-7">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{s.text}</p>
              <div className="text-white/40 text-sm font-medium">— {s.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-[#f5a623] text-sm font-medium hover:gap-3 transition-all">
            לכל הביקורות
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative bg-[#2d1200] py-24 overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/6 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          מגיעים לקייזר סנטר?<br />
          <span className="text-[#f5a623]">עצרו אצלנו.</span>
        </h2>
        <p className="text-white/45 text-base mb-10 max-w-md mx-auto">
          קומה עליונה, מרכז קייזר, מודיעין.<br />פתוחים ראשון עד שישי.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:072-3930492"
            className="px-8 py-4 bg-[#f5a623] text-[#1a0a00] font-bold text-sm rounded-full hover:bg-[#ffc045] hover:shadow-[0_0_24px_rgba(245,166,35,0.4)] transition-all tracking-wide">
            072-3930492
          </a>
          <Link to="/contact"
            className="px-8 py-4 border border-white/15 text-white/70 text-sm font-medium rounded-full hover:border-[#f5a623]/30 hover:text-white transition-all">
            מידע ומיקום
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="bg-[#1a0a00] min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <ReviewsStrip />
      <CTA />
      <Footer />
    </div>
  )
}
