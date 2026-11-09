import { PHONE, PHONE_PRETTY } from '@/lib/content';
import Logo from './Logo';

const NAV = [
  { href: '/#kotly', label: 'Котлы' },
  { href: '/#tseny', label: 'Цены' },
  { href: '/montazh-kotla-gomel', label: 'Монтаж' },
  { href: '/#voprosy', label: 'Вопросы' },
  { href: '/#zayavka', label: 'Контакты' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="/#top" className="shrink-0">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hover:text-flame-700 transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden lg:block text-right leading-tight">
            <span className="block text-xs text-stone-400">Пн–Сб, 9:00–18:00</span>
            <span className="block text-xs font-medium text-emerald-600">Перезвоним в рабочее время</span>
          </span>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
          >
            {PHONE_PRETTY}
          </a>
        </div>
      </div>
    </header>
  );
}
