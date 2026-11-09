import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import CallbackFab from '@/components/CallbackFab';
import MobileCallBar from '@/components/MobileCallBar';
import InlineCta from '@/components/InlineCta';
import { PHONE, PHONE_PRETTY } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Монтаж твердотопливного котла в Гомеле — от 500 р. | Тепло в дом',
  description: 'Установка твердотопливного котла в Гомеле под ключ: обвязка, дымоход, пуск. От 500 р., выезд в день заявки, гарантия 1 год. ☎ +375 33 330-99-80',
  alternates: { canonical: 'https://teplo-v-dom.vercel.app/montazh-kotla-gomel' },
  openGraph: {
    title: 'Монтаж твердотопливного котла в Гомеле — от 500 р.',
    description: 'Установка под ключ: обвязка, дымоход, пуск. Выезд в день заявки.',
    url: 'https://teplo-v-dom.vercel.app/montazh-kotla-gomel',
    type: 'website',
  },
};

const PRICE_TABLE: Array<[string, string]> = [
  ['Монтаж котла на готовое основание', 'от 500 р.'],
  ['Обвязка (насос, расширительный бак, группа безопасности)', 'от 400 р.'],
  ['Монтаж дымохода', 'от 50 р./п.м.'],
  ['Подключение к уже существующей системе отопления', 'от 300 р.'],
  ['Монтаж буферной ёмкости (теплоаккумулятора)', 'от 250 р.'],
  ['Пуско-наладка и инструктаж', 'входит в монтаж'],
];

const INCLUDES = [
  { title: 'Установка на место', text: 'Проверяем основание, крепим котёл, выравниваем по уровню.' },
  { title: 'Обвязка системы', text: 'Циркуляционный насос, расширительный бак, группа безопасности, трёхходовой клапан при необходимости.' },
  { title: 'Монтаж дымохода', text: 'Сэндвич-труба из нержавеющей стали, расчёт высоты и диаметра под конкретный котёл.' },
  { title: 'Пуск и настройка', text: 'Заполняем систему, опрессовываем, запускаем котёл, показываем, как им пользоваться.' },
];

const FAQ = [
  { q: 'Сколько стоит монтаж котла в Гомеле?', a: 'Монтаж на готовое основание — от 500 р. С полной обвязкой и дымоходом — от 950 р. Точная цена зависит от мощности котла и состояния котельной.' },
  { q: 'Можно ли установить котёл, который я купил не у вас?', a: 'Да, устанавливаем котлы любых брендов, купленные где угодно. Главное — чтобы котёл подходил по мощности под ваш дом.' },
  { q: 'Нужно ли что-то готовить к приезду мастера?', a: 'Котельная должна быть доступна, с готовым основанием под котёл. Остальное — обвязку, дымоход, подключение — делаем сами.' },
  { q: 'Сколько занимает монтаж?', a: 'Установка на готовую котельную — один рабочий день. Если нужно прокладывать дымоход через перекрытия или готовить помещение — 2–3 дня.' },
];

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://teplo-v-dom.vercel.app' },
    { '@type': 'ListItem', position: 2, name: 'Монтаж котла', item: 'https://teplo-v-dom.vercel.app/montazh-kotla-gomel' },
  ],
};

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Монтаж твердотопливного котла в Гомеле',
  description: 'Установка твердотопливного котла под ключ: обвязка, дымоход, пуско-наладка.',
  provider: { '@type': 'LocalBusiness', name: 'Тепло в дом', telephone: '+375333309980', logo: 'https://teplo-v-dom.vercel.app/logo-512.png' },
  areaServed: { '@type': 'City', name: 'Гомель' },
  offers: { '@type': 'Offer', price: '500', priceCurrency: 'BYN' },
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

export default function MontazhKotlaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Header />
      <main>
        <section className="bg-gradient-to-br from-stone-900 via-stone-900 to-flame-900 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
            <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-6">
              <a href="/" className="hover:text-white/70 transition-colors">Главная</a>
              <span>/</span>
              <span className="text-white/60">Монтаж котла</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5 max-w-2xl">
              Монтаж твердотопливного котла в Гомеле — от 500 р.
            </h1>
            <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-xl">
              Установка под ключ: обвязка, дымоход, пуск. Выезд мастера в день заявки, гарантия на работы 1 год.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-700 text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
              Вызвать мастера — {PHONE_PRETTY}
            </a>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Что входит в монтаж</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INCLUDES.map(item => (
                <div key={item.title} className="bg-white rounded-2xl border border-stone-200 p-5">
                  <p className="font-semibold text-stone-900 mb-1.5">{item.title}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Стоимость монтажа</h2>
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
            <p className="text-stone-400 text-xs mt-3">Точная стоимость — после осмотра котельной. Цены актуальны на 2026 год.</p>
            <div className="mt-8">
              <InlineCta text="Нужен точный расчёт под вашу котельную? Позвоните сейчас." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Вопросы о монтаже</h2>
            <div className="space-y-3 max-w-2xl">
              {FAQ.map(item => (
                <div key={item.q} className="bg-white rounded-2xl border border-stone-200 p-5">
                  <p className="font-semibold text-stone-900 mb-2">{item.q}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Оставьте заявку на монтаж</h2>
              <p className="text-stone-500 mb-4 max-w-md">Выезжаем на замер и консультацию, называем цену по телефону.</p>
              <a href="/" className="text-sm font-semibold text-flame-700 hover:underline">← Посмотреть каталог котлов</a>
            </div>
            <OrderForm />
          </section>
        </div>
      </main>
      <Footer />
      <CallbackFab />
      <MobileCallBar />
    </>
  );
}
