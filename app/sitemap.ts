import { MetadataRoute } from 'next';
import { SITE } from '~/config.js';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.origin;

  // Static pages with their update frequencies and priorities
  // Excluded routes (blocked in production):
  // - /services, /pricing, /faqs, /privacy, /terms (blocked by middleware)
  // - /publications/* (blocked by middleware)
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return routes;
}
