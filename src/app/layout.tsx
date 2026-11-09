import type { Metadata } from 'next';
import { Bitter, Golos_Text } from 'next/font/google';
import '../styles/globals.css';

const bitter = Bitter({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const golosText = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teplo-v-dom.vercel.app'),
  title: 'Твердотопливные котлы в Гомеле — продажа и установка | Тепло в дом',
  description: 'Твердотопливные котлы Sakovich в Гомеле: от 1 990 р., монтаж под ключ от 500 р. Пеллетные котлы. Выезд в день заявки, гарантия на работы. ☎ +375 33 330-99-80',
  alternates: { canonical: 'https://teplo-v-dom.vercel.app' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    siteName: 'Тепло в дом',
    title: 'Твердотопливные котлы в Гомеле — Тепло в дом',
    description: 'Продажа и установка твердотопливных котлов Sakovich под ключ в Гомеле и области.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${bitter.variable} ${golosText.variable}`}>
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
