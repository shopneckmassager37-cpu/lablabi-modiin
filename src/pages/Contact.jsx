import { Navbar, Footer } from '../components/Layout'

export default function Contact() {
  return (
    <div className="bg-[#1a0a00] min-h-screen" dir="rtl">
      <Navbar />

      <div className="relative pt-32 pb-16 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f5a623]/6 rounded-full blur-[130px] pointer-events-none" />
        <span className="inline-block text-[#f5a623] text-xs font-semibold tracking-[0.2em] uppercase mb-4">מידע ויצירת קשר</span>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4">איך מוצאים אותנו</h1>
        <p className="text-white/40 text-base max-w-md mx-auto">מרכז קייזר סנטר, קומה עליונה — מחכים לכם.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">

          <div className="flex flex-col gap-4">
            {[
              {
                title: 'כתובת',
                lines: ['עמק זבולון 24', 'מרכז קייזר סנטר, קומה עליונה', 'מודיעין מכבים רעות'],
                action: { label: 'פתחו בווייז', href: 'https://waze.com/ul?q=חומוס+לבלבי+מודיעין' },
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
              },
              {
                title: 'שעות פתיחה',
                lines: ['ראשון–חמישי: 11:00–19:30', 'שישי: 10:00–15:00', 'שבת: סגור'],
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
              },
              {
                title: 'טלפון',
                lines: ['072-3930492'],
                action: { label: 'התקשרו עכשיו', href: 'tel:072-3930492' },
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
              },
              {
                title: 'חנייה',
                lines: ['חנייה חינם בחניון קייזר סנטר', 'כניסה מהצד הדרומי — רחוב עמק זבולון'],
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>,
              },
            ].map((card) => (
              <div key={card.title}
                className="rounded-xl border border-white/8 bg-[#2d1200]/40 p-6 hover:border-[#f5a623]/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#f5a623]/10 border border-[#f5a623]/15 flex items-center justify-center text-[#f5a623] flex-shrink-0 mt-0.5">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm mb-2">{card.title}</div>
                    {card.lines.map((l) => (
                      <div key={l} className="text-white/45 text-sm leading-relaxed">{l}</div>
                    ))}
                    {card.action && (
                      <a href={card.action.href} target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs px-3 py-1.5 rounded-full bg-[#f5a623]/12 text-[#f5a623] border border-[#f5a623]/20 hover:bg-[#f5a623]/20 transition-all font-medium">
                        {card.action.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {/* Map */}
            <a href="https://waze.com/ul?q=חומוס+לבלבי+מודיעין" target="_blank" rel="noopener noreferrer"
              className="rounded-xl border border-white/8 bg-[#2d1200]/40 h-44 flex flex-col items-center justify-center gap-3 hover:border-[#f5a623]/20 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/15 flex items-center justify-center text-[#f5a623] group-hover:bg-[#f5a623]/18 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <span className="text-white/35 text-xs group-hover:text-white/60 transition-colors">פתחו בווייז / מפות Google</span>
            </a>

            {/* Wolt */}
            <div className="rounded-xl border border-[#f5a623]/20 bg-[#f5a623]/5 p-7 text-center">
              <div className="w-10 h-10 rounded-xl bg-[#f5a623]/12 border border-[#f5a623]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#f5a623]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-1.5">הזמינו משלוח</h3>
              <p className="text-white/40 text-xs mb-5">חומוס טרי עד הבית — דרך Wolt</p>
              <a href="https://wolt.com/he/isr/modiin/restaurant/hummus-lablabi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5a623] text-[#1a0a00] font-bold text-sm rounded-full hover:bg-[#ffc045] transition-all">
                הזמינו דרך Wolt ←
              </a>
            </div>

            {/* Social */}
            <div className="rounded-xl border border-white/8 bg-[#2d1200]/40 p-6">
              <div className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">עקבו אחרינו</div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/humuslablabi" target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl border border-white/8 text-white/40 text-xs text-center hover:border-[#f5a623]/25 hover:text-[#f5a623] transition-all font-medium">
                  Facebook
                </a>
                <a href="https://www.instagram.com/hummus_lablabi/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl border border-white/8 text-white/40 text-xs text-center hover:border-[#f5a623]/25 hover:text-[#f5a623] transition-all font-medium">
                  Instagram
                </a>
              </div>
            </div>

            {/* Kosher */}
            <div className="rounded-xl border border-white/8 bg-[#2d1200]/40 p-5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">כשר פרווה</div>
                <div className="text-white/35 text-xs mt-0.5">בהשגחת רבנות מודיעין · ללא גלוטן</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
