import { Navbar, Footer } from '../components/Layout'

const sections = [
  {
    title: 'חומוס', 
    items: [
      { name: 'חומוס רגיל',    desc: 'חומוס טרי עם שמן זית, פפריקה ופטרוזיליה',         price: '₪28' },
      { name: 'חומוס עם פול',  desc: 'חומוס עם פול חם מתובל ושמן זית',                  price: '₪32' },
      { name: 'מסבחה',         desc: 'גרגרי חומוס שלמים מעל חומוס טחון עם לימון וכמון', price: '₪34' },
      { name: 'חומוס עם ביצה', desc: 'חומוס קרמי עם ביצה קשה חצויה',                   price: '₪30' },
    ],
  },
  {
    title: 'פלאפל',
    items: [
      { name: 'מנת פלאפל',       desc: '6 כדורי פלאפל עם פיתה, חומוס וסלטים',     price: '₪38' },
      { name: 'פלאפל בפיתה',     desc: 'פיתה חמה עם פלאפל, ירקות וטחינה',         price: '₪22' },
      { name: 'פלאפל על חומוס',  desc: 'כדורי פלאפל על מיטת חומוס טרי',           price: '₪40' },
    ],
  },
  {
    title: 'סלטים ותוספות',
    items: [
      { name: 'סלט ירקות קצוץ', desc: 'עגבניות, מלפפון, פלפל — תיבול ביתי',  price: '₪14' },
      { name: 'חציל קלוי',      desc: 'עם שום, לימון ושמן זית',               price: '₪16' },
      { name: 'חמוצים ביתיים',  desc: 'כרוב, מלפפון, גזר — כבישה ביתית',     price: '₪12' },
      { name: 'טחינה ביתית',    desc: 'טחינה גולמית עם שום ולימון',          price: '₪10' },
    ],
  },
  {
    title: 'שתייה',
    items: [
      { name: 'מיץ לימון טרי',        desc: 'סחוט במקום',     price: '₪12' },
      { name: 'שתייה קלה',            desc: 'בקבוק 500 מ״ל',  price: '₪10' },
      { name: 'מים מינרלים',          desc: 'בקבוק 500 מ״ל',  price: '₪7'  },
    ],
  },
]

export default function Menu() {
  return (
    <div className="bg-[#1a0a00] min-h-screen" dir="rtl">
      <Navbar />

      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f5a623]/6 rounded-full blur-[130px] pointer-events-none" />
        <span className="inline-block text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-4">הכל טרי, הכל ביתי</span>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">התפריט שלנו</h1>
        <p className="text-white/40 text-base max-w-md mx-auto mb-6">מוכן מדי יום, עם אהבה ומרכיבים טריים בלבד.</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/20 bg-[#f5a623]/6">
          <span className="text-[#f5a623] text-xs font-medium">כשר פרווה · ללא גלוטן · בהשגחת רבנות מודיעין</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-28 flex flex-col gap-16">
        {sections.map((sec) => (
          <div key={sec.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white">{sec.title}</h2>
              <div className="flex-1 h-px bg-white/6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sec.items.map((item) => (
                <div key={item.name}
                  className="rounded-xl border border-white/8 bg-[#2d1200]/40 p-6 flex items-start justify-between gap-4 hover:border-[#f5a623]/20 transition-all duration-200">
                  <div>
                    <div className="text-white font-semibold text-sm mb-1.5">{item.name}</div>
                    <div className="text-white/35 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                  <div className="flex-shrink-0 text-[#f5a623] font-bold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-[#f5a623]/25 bg-gradient-to-br from-[#f5a623]/8 to-[#2d1200]/60 p-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f5a623]/15 border border-[#f5a623]/25 flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-[#f5a623]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <h3 className="text-white font-black text-2xl mb-3">ארוחה משפחתית</h3>
          <p className="text-white/50 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            מגוון מנות חומוס, פלאפל, סלטים ופיתות לכל המשפחה — ב-199 ₪ בלבד.
          </p>
          <a href="tel:072-3930492"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5a623] text-[#1a0a00] font-bold text-sm rounded-full hover:bg-[#ffc045] transition-all tracking-wide">
            הזמינו: 072-3930492
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
