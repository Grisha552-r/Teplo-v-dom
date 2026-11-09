import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://teplo-v-dom.by'),
  title: 'Тепло в дом — твердотопливные котлы в Гомеле, продажа и установка',
  description: 'Твердотопливные котлы в Гомеле: продажа от 1 990 р., монтаж под ключ от 500 р. Выезд в день заявки, гарантия на работы. ☎ +375 33 330-99-80',
  alternates: { canonical: 'https://teplo-v-dom.by' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    siteName: 'Тепло в дом',
    title: 'Тепло в дом — твердотопливные котлы в Гомеле',
    description: 'Продажа и установка твердотопливных котлов под ключ в Гомеле и области.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
