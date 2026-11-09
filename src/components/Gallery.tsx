const WORKS = [
  { src: '/images/works/obvyazka-kotla-max.jpg', alt: 'Обвязка котла Sakovich MAX — насос, манометры, группа безопасности', label: 'Обвязка котла Sakovich MAX' },
  { src: '/images/works/montazh-dymohoda.jpg', alt: 'Монтаж дымохода и установка котла Sakovich', label: 'Монтаж котла и дымохода' },
  { src: '/images/works/pelletnyy-kotel-tis.jpg', alt: 'Установка пеллетного котла TIS с бункером автоподачи', label: 'Пеллетный котёл с автоподачей' },
];

export default function Gallery() {
  return (
    <section id="raboty" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Наши работы</h2>
        <p className="text-stone-500 text-sm mb-8">Фото с реальных объектов в Гомеле</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {WORKS.map(w => (
            <figure key={w.src} className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.src} alt={w.alt} className="w-full aspect-[4/3] object-cover" />
              <figcaption className="px-4 py-3 text-sm font-medium text-stone-700">{w.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
