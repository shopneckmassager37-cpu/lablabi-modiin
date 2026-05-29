import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a00]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00] via-[#2d1200] to-[#1a0a00]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#f5a623]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c8860a]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle, #f5a623 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" dir="rtl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
          <span className="text-[#f5a623] text-xs font-semibold tracking-widest">כשר פרווה · ללא גלוטן · מרכז קייזר מודיעין</span>
        </div>

        <h1 className="font-bold leading-tight mb-6">
          <span className="block text-white text-5xl sm:text-7xl md:text-8xl mb-2">חומוס לבלבי</span>
          <span className="block text-[#f5a623] text-3xl sm:text-4xl md:text-5xl">הטעם האמיתי של פעם</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          חומוס טרי שמוכן מדי יום, פלאפל פריך, וסלטים ביתיים —<br />
          מתכון משפחתי שעבר דורות, מוגש באהבה אמיתית.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/menu"
            className="w-full sm:w-auto px-8 py-4 bg-[#f5a623] text-[#1a0a00] font-bold text-base rounded-full hover:bg-[#ffc045] hover:shadow-[0_0_32px_rgba(245,166,35,0.5)] active:scale-95 transition-all duration-200">
            לתפריט המלא ←
          </Link>
          <a href="https://wolt.com/he/isr/modiin/restaurant/hummus-lablabi" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-[#f5a623]/25 text-[#f5a623] font-medium text-base rounded-full hover:bg-[#f5a623]/8 transition-all duration-200">
            הזמינו דרך וולט 🛵
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-16">
          {[
            { v: '9+',      l: 'שנות ניסיון' },
            { v: 'טרי',     l: 'כל בוקר' },
            { v: 'ללא גלוטן', l: 'חומוס ופלאפל' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <div className="text-[#f5a623] text-2xl sm:text-3xl font-bold">{v}</div>
              <div className="text-white/35 text-xs sm:text-sm mt-1">{l}</div>
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
    { emoji: '🧆', title: 'פלאפל ביתי',   desc: 'מוכן מדי בוקר — פריך מבחוץ, רך מבפנים. המתכון של אבא.' },
    { emoji: '🥣', title: 'חומוס טרי',    desc: 'נטחן על הרגע. לא מאתמול, לא מקופסה — תמיד טרי.' },
    { emoji: '🫙', title: 'סלטים ביתיים', desc: 'מבחר סלטים שמוכנים כל יום במטבח. תוספות שמשלימות כל מנה.' },
    { emoji: '🫓', title: 'פיתה חמה',     desc: 'ישירות מהתנור, מגיעה אליכם חמה ורכה.' },
  ]

  return (
    <section className="bg-[#1a0a00] py-28" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">מה אנחנו מגישים</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">האוכל שמדברים עליו</h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">כל מה שעל הצלחת — עשוי בידיים, מכל הלב.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div key={item.title}
              className="rounded-2xl border border-[#f5a623]/15 bg-[#2d1200]/60 p-7 flex flex-col gap-4 hover:border-[#f5a623]/35 hover:bg-[#2d1200] transition-all duration-300">
              <div className="text-4xl">{item.emoji}</div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
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
    { name: 'אבי כ.',  text: 'עומר ממש אדם נחמד, מסביר על כל מנה. השירות אישי ומשפחתי. ממליץ בחום.' },
    { name: 'שרה מ.', text: 'חזרתי כבר 4 פעמים. הסלטים ביתיים לגמרי, הפלאפל… וואו.' },
  ]
  return (
    <section className="bg-[#140800] py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">מה אומרים עלינו</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">לקוחות מרוצים 🌟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {snippets.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/8 bg-[#2d1200]/50 p-6">
              <div className="text-[#f5a623]/20 text-5xl font-bold leading-none mb-3">"</div>
              <p className="text-white/55 text-sm leading-relaxed mb-4">{s.text}</p>
              <div className="text-white font-semibold text-sm">— {s.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 px-6 py-3 border border-[#f5a623]/25 text-[#f5a623] text-sm font-medium rounded-full hover:bg-[#f5a623]/8 transition-all">
            לכל הביקורות ←
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-[#2d1200] py-24 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5a623]/5 via-transparent to-[#f5a623]/5" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          מגיעים לקייזר סנטר?{' '}
          <span className="text-[#f5a623]">עצרו אצלנו.</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">קומה עליונה, מרכז קייזר, מודיעין. פתוחים ראשון עד שישי.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:072-3930492"
            className="px-8 py-4 bg-[#f5a623] text-[#1a0a00] font-bold rounded-full hover:bg-[#ffc045] hover:shadow-[0_0_24px_rgba(245,166,35,0.4)] transition-all">
            📞 072-3930492
          </a>
          <Link to="/contact"
            className="px-8 py-4 border border-[#f5a623]/30 text-[#f5a623] font-medium rounded-full hover:bg-[#f5a623]/10 transition-all">
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
