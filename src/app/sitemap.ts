import type { MetadataRoute } from 'next';

const BASE = 'https://teplo-v-dom.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/montazh-kotla-gomel`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
