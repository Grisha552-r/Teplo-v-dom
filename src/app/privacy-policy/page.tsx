import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EMAIL, PHONE_PRETTY } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Тепло в дом',
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-stone-900 mb-6">Политика конфиденциальности</h1>
        <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
          <p>Сайт «Тепло в дом» собирает имя, телефон и комментарий, которые вы указываете в форме заявки, чтобы связаться с вами по поводу заказа.</p>
          <p>Данные используются только для обработки заявки и не передаются третьим лицам.</p>
          <p>Для удаления ваших данных напишите на {EMAIL} или позвоните по телефону {PHONE_PRETTY}.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
