import { Navbar, Footer } from '../components/Layout'

export default function About() {
  return (
    <div className="bg-[#1a0a00] min-h-screen" dir="rtl">
      <Navbar />

      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f5a623]/6 rounded-full blur-[130px] pointer-events-none" />
        <span className="inline-block text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-4">הסיפור שלנו</span>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">אודות לבלבי</h1>
        <p className="text-white/40 text-base max-w-lg mx-auto">לא רק חומוסייה. בית אוכל שנבנה על אהבה, מסורת ומרכיבים טריים.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-28 flex flex-col gap-24">

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-white mb-5">מתל אביב למודיעין — סיפור משפחתי</h2>
            <div className="flex flex-col gap-4 text-white/50 text-sm leading-loose">
              <p>עומר, הבעלים של חומוס לבלבי, גדל על ריח החומוס והפלאפל. אביו הקים פלאפלייה-חומוסייה בתל אביב שנים רבות לפני כן — וכשעומר ירש את הידע, הוא ידע בדיוק מה לעשות איתו.</p>
              <p>במשך תשע שנים, לבלבי פעלה בתל אביב ובנתה לעצמה קהל נאמן שחזר שוב ושוב. הטעם לא השתנה, המתכון נשמר — ועכשיו הוא הגיע למודיעין.</p>
              <p>עומר מכין בעצמו, מדי יום, את החומוס והפלאפל — בלי קיצורי דרך, בלי מוצרים מוכנים מראש. כי כשאתה אוהב את מה שאתה עושה, זה מרגישים בצלחת.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#f5a623]/15 bg-[#2d1200]/60 p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#f5a623]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="text-[#f5a623] font-bold text-xl mb-1">עומר</div>
            <div className="text-white/40 text-sm mb-6">בעלים ושף ראשי</div>
            <div className="pt-5 border-t border-white/8 text-white/30 text-sm italic leading-relaxed">
              "אני מכין כל יום את מה שהייתי רוצה לאכול בעצמי."
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-black text-white mb-10 text-center">מה מייחד אותנו</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: 'טרי בלבד',
                desc: 'אין פה כלום מאתמול. החומוס, הפלאפל, הסלטים — הכל מוכן היום, בבוקר.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'כשר פרווה',
                desc: 'בהשגחת רבנות מודיעין. כשרות שאפשר לסמוך עליה.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'ללא גלוטן',
                desc: 'החומוס והפלאפל מיוצרים ללא גלוטן — בטוח גם לרגישים.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ),
              },
            ].map((v) => (
              <div key={v.title}
                className="rounded-2xl border border-white/8 bg-[#2d1200]/40 p-7 hover:border-[#f5a623]/20 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center text-[#f5a623] mb-4">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-black text-white mb-12 text-center">הציר הזמן שלנו</h2>
          <div className="relative flex flex-col gap-0 max-w-2xl mx-auto">
            <div className="absolute right-[19px] top-2 bottom-2 w-px bg-[#f5a623]/12" />
            {[
              { year: 'אבא',    event: 'פלאפלייה בתל אביב — המתכון המקורי נולד' },
              { year: '2015',   event: 'עומר פותח את לבלבי בתל אביב עם אותו מתכון משפחתי' },
              { year: '2024',   event: 'חומוס לבלבי מגיע למודיעין — מרכז קייזר, קומה עליונה' },
              { year: 'היום',   event: 'מגישים מדי יום לאלפי לקוחות מרוצים במודיעין' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start pb-10 last:pb-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a0a00] border border-[#f5a623]/30 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#f5a623]" />
                </div>
                <div className="pt-2.5">
                  <div className="text-[#f5a623] font-bold text-xs tracking-widest uppercase mb-1.5">{item.year}</div>
                  <div className="text-white/60 text-sm leading-relaxed">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
