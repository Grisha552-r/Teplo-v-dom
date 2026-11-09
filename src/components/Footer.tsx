import { ADDRESS, EMAIL, PHONE, PHONE_PRETTY, SITE_NAME } from '@/lib/content';
import { LogoMark } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <LogoMark size={32} />
            <p className="text-white font-bold text-lg">{SITE_NAME}</p>
          </div>
          <p className="text-sm text-stone-400">Твердотопливные котлы в Гомеле — продажа и установка под ключ.</p>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-3">Контакты</p>
          <a href={`tel:${PHONE}`} className="block text-sm hover:text-white transition-colors mb-1.5">{PHONE_PRETTY}</a>
          <a href={`mailto:${EMAIL}`} className="block text-sm hover:text-white transition-colors mb-1.5">{EMAIL}</a>
          <p className="text-sm text-stone-400">{ADDRESS}</p>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-3">Режим работы</p>
          <p className="text-sm text-stone-400">Пн–Сб, 9:00–18:00</p>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-stone-500">
          © 2026 {SITE_NAME}. Все права защищены.
        </div>
      </div>
      <div className="h-14 sm:hidden" />
    </footer>
  );
}
