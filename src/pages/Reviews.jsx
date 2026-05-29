import { Navbar, Footer } from '../components/Layout'

const reviews = [
  { name: 'מיכל ר.',  platform: 'Google',   stars: 5, date: 'אפריל 2025', text: 'חומוס מהטעמים שהכי מזכירים לי את ירושלים — לא עמילני, לא מלוח מדי, פשוט מושלם. הפלאפל פריך מבחוץ ורך מבפנים. הגעתי פעם אחת ובאתי שוב באותו שבוע.' },
  { name: 'אבי כ.',   platform: 'Google',   stars: 5, date: 'מרץ 2025',   text: 'סוף סוף מקום שמבין מה זה חומוס אמיתי במודיעין. עומר ממש אדם נחמד, מסביר על כל מנה, ובא לשאול אם טעים. השירות אישי ומשפחתי. ממליץ בחום.' },
  { name: 'שרה מ.',   platform: 'Google',   stars: 5, date: 'מאי 2025',   text: 'הייתי סקפטית — חומוסייה במרכז קניות? אבל הפה שלי לא נתן לי לשכוח. חזרתי כבר 4 פעמים. הסלטים ביתיים לגמרי, החמוצים נהדרים, והפלאפל… וואו.' },
  { name: 'דוד ל.',   platform: 'Google',   stars: 5, date: 'יוני 2025',  text: 'כגלוטן-רגיש שמח לשמוע שהחומוס והפלאפל ללא גלוטן. לא מוותרים על כלום. בדיוק כמו שאבא גדל על זה.' },
  { name: 'נועה ב.',  platform: 'Google',   stars: 5, date: 'ינואר 2025', text: 'ביקרנו עם הילדים, כולם אכלו כמו מלכים. הפיתה יצאה חמה, החומוס היה ממש קרמי. פחות יקר ממה שחשבתי לאיכות הזו.' },
  { name: 'יוסי א.', platform: 'Wolt',     stars: 5, date: 'פברואר 2025', text: 'הזמנתי דרך וולט ולא האמנתי שחומוס יגיע בצורה כזו. נארז מצוין, הגיע חם, והטחינה הביתית הייתה מופלאה. יהיה קשה להזמין ממקום אחר עכשיו.' },
  { name: 'רינה ג.', platform: 'Facebook', stars: 5, date: 'ינואר 2025', text: 'לא הבנתי שאפשר לקנות חומוס כזה טרי במודיעין בלי לנסוע לתל אביב. הגעתי על המלצת חברה ויצאתי עם כוונה לחזור מחר. עומר שם את הנשמה בכל צלחת.' },
  { name: 'אייל ש.', platform: 'Google',   stars: 4, date: 'מרץ 2025',   text: 'חומוס ברמה גבוהה מאוד, פלאפל מצוין. מקום קטן ואינטימי — לפעמים יש קצת המתנה בשעות העמוסות. שווה לחכות.' },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= n ? 'text-[#f5a623]' : 'text-white/15'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const platformStyle = {
  Google:   'bg-blue-500/15 text-blue-400 border-blue-500/20',
  Wolt:     'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  Facebook: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
}

export default function Reviews() {
  const avg = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)

  return (
    <div className="bg-[#1a0a00] min-h-screen" dir="rtl">
      <Navbar />

      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f5a623]/7 rounded-full blur-[120px] pointer-events-none" />
        <span className="inline-block text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-4">מה אומרים עלינו</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">ביקורות לקוחות</h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto mb-8">כולם אמרו את זה בעצמם — אנחנו רק מציגים.</p>

        <div className="inline-flex items-center gap-5 px-8 py-5 rounded-2xl border border-[#f5a623]/20 bg-[#2d1200]/60">
          <div>
            <div className="text-[#f5a623] font-bold text-5xl">{avg}</div>
            <div className="text-white/30 text-xs mt-1">{reviews.length} ביקורות</div>
          </div>
          <div>
            <Stars n={5} />
            <div className="text-white/35 text-xs mt-1 text-center">דירוג ממוצע</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reviews.map((r, i) => (
            <div key={i}
              className="rounded-2xl border border-white/8 bg-[#2d1200]/50 p-7 flex flex-col gap-4 hover:border-[#f5a623]/25 transition-all duration-300">
              <div className="text-[#f5a623]/20 text-6xl font-bold leading-none">"</div>
              <p className="text-white/60 text-sm leading-relaxed -mt-4">{r.text}</p>
              <div className="mt-auto pt-4 border-t border-white/6 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{r.date}</div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <Stars n={r.stars} />
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${platformStyle[r.platform]}`}>
                    {r.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/35 text-base mb-5">נהנתם? נשמח לביקורת!</p>
          <a href="https://www.google.com/search?q=חומוס+לבלבי+מודיעין" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5a623] text-[#1a0a00] font-bold rounded-full hover:bg-[#ffc045] transition-all">
            כתבו ביקורת בגוגל ⭐
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
