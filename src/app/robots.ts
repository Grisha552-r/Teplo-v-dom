import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://teplo-v-dom.vercel.app/sitemap.xml',
    host: 'https://teplo-v-dom.vercel.app',
  };
}
