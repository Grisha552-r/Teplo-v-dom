import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import OrderForm from '@/components/OrderForm';
import CallbackFab from '@/components/CallbackFab';
import MobileCallBar from '@/components/MobileCallBar';
import InlineCta from '@/components/InlineCta';
import { BOILERS, FAQ, PHONE, PHONE_PRETTY, PRICE_TABLE, STEPS, USPS } from '@/lib/content';

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Тепло в дом',
  description: 'Продажа и установка твердотопливных котлов Саковичи в Гомеле под ключ.',
  url: 'https://teplo-v-dom.vercel.app',
  logo: 'https://teplo-v-dom.vercel.app/logo-512.png',
  image: 'https://teplo-v-dom.vercel.app/images/works/obvyazka-kotla-max.jpg',
  telephone: '+375333309980',
  email: 'info.teploprim@mail.ru',
  address: { '@type': 'PostalAddress', streetAddress: 'ул. Добрушская, 60', addressLocality: 'Гомель', addressCountry: 'BY' },
  areaServed: { '@type': 'City', name: 'Гомель' },
};

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Тепло в дом',
  url: 'https://teplo-v-dom.vercel.app',
};

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Продажа и установка твердотопливных котлов в Гомеле',
  description: 'Подбор, продажа и монтаж под ключ твердотопливных котлов для частного дома: расчёт мощности, обвязка, дымоход, пуск.',
  provider: { '@type': 'LocalBusiness', name: 'Тепло в дом', telephone: '+375333309980' },
  areaServed: { '@type': 'City', name: 'Гомель' },
  offers: { '@type': 'Offer', price: '1990', priceCurrency: 'BYN', description: 'Котёл от 1 990 р., монтаж от 500 р.' },
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <div id="top">
        <Header />

        {/* Hero */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-flame-600 text-sm font-semibold uppercase tracking-widest mb-4">Гомель и область</p>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-5 text-stone-900">
                Твердотопливные котлы Sakovich в Гомеле — продажа и установка под ключ
              </h1>
              <p className="text-stone-500 text-base sm:text-lg mb-8 max-w-xl">
                Подберём котёл под площадь дома, привезём и установим за один визит. Выезд мастера в день заявки.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[['от 1 990 р.', 'Котёл'], ['от 500 р.', 'Монтаж'], ['1 год', 'Гарантия'], ['в день', 'Выезд']].map(([val, label]) => (
                  <div key={label} className="bg-stone-100 rounded-xl px-4 py-2.5 text-center">
                    <div className="text-stone-900 font-bold text-base">{val}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                  Позвонить — {PHONE_PRETTY}
                </a>
                <a href="#zayavka" className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 font-semibold px-6 py-3.5 rounded-xl transition-colors">
                  Оставить заявку
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-flame-600/10 rounded-[2rem] blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/works/obvyazka-kotla-max.jpg"
                alt="Установленный твердотопливный котёл Sakovich MAX с полной обвязкой"
                className="relative rounded-3xl border border-stone-200 shadow-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-white text-stone-900 rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-bold text-sm">Реальный монтаж</p>
                <p className="text-xs text-stone-500">Объект в Гомеле</p>
              </div>
            </div>
          </div>
        </section>

        <main>
          {/* USPs */}
          <section className="py-14">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {USPS.map(u => (
                  <div key={u.title} className="bg-white rounded-2xl border border-stone-200 p-5">
                    <p className="font-bold text-stone-900 mb-1.5">{u.title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{u.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Boilers */}
          <section id="kotly" className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Какой котёл выбрать</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BOILERS.map(b => (
                  <div key={b.title} className="rounded-2xl border border-stone-200 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-bold text-lg text-stone-900">{b.title}</p>
                      <p className="font-bold text-flame-700">{b.price}</p>
                    </div>
                    <p className="text-xs font-medium text-flame-600 uppercase tracking-wide mb-3">{b.fuel}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <InlineCta text="Не уверены, какой котёл подойдёт? Позвоните — подскажем бесплатно." />
              </div>
            </div>
          </section>

          {/* Price table */}
          <section id="tseny" className="py-14">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Цены</h2>
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden max-w-2xl">
                <table className="w-full text-sm">
                  <tbody>
                    {PRICE_TABLE.map(([svc, price], i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0">
                        <td className="px-5 py-3.5 text-stone-700">{svc}</td>
                        <td className="px-5 py-3.5 text-right font-semibold text-flame-700 whitespace-nowrap">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-stone-400 text-xs mt-3">Точная стоимость — после расчёта. Цены актуальны на 2026 год.</p>
              <div className="mt-8">
                <InlineCta text="Хотите точный расчёт под ваш дом? Позвоните — считаем бесплатно." />
              </div>
            </div>
          </section>

          {/* How installation works */}
          <section id="montazh" className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Как проходит установка</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {STEPS.map((s, i) => (
                  <div key={s.title} className="relative rounded-2xl border border-stone-200 p-5 pt-8">
                    <span className="absolute -top-3 left-5 w-7 h-7 rounded-full bg-flame-600 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    <p className="font-semibold text-stone-900 mb-1.5">{s.title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
              <a href="/montazh-kotla-gomel" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-flame-700 hover:underline">
                Подробнее о монтаже и ценах на установку →
              </a>
            </div>
          </section>

          <Gallery />

          {/* FAQ */}
          <section id="voprosy" className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Частые вопросы</h2>
              <div className="space-y-3 max-w-2xl">
                {FAQ.map(item => (
                  <div key={item.q} className="rounded-2xl border border-stone-200 p-5">
                    <p className="font-semibold text-stone-900 mb-2">{item.q}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Order form */}
          <section id="zayavka" className="py-14">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">Оставьте заявку</h2>
                  <p className="text-stone-500 mb-6 max-w-md">
                    Перезвоним и поможем подобрать котёл под ваш дом. Можно просто позвонить: {' '}
                    <a href={`tel:${PHONE}`} className="font-semibold text-flame-700 hover:underline">{PHONE_PRETTY}</a>
                  </p>
                </div>
                <OrderForm />
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CallbackFab />
        <MobileCallBar />
      </div>
    </>
  );
}
