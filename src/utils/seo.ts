import { Metadata } from 'next';
import { SITE } from '~/config.js';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata({
  title,
  description = SITE.description,
  keywords = [],
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  article,
  noindex = false,
  nofollow = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} — ${SITE.name}` : SITE.title;
  const url = canonical ? `${SITE.origin}${canonical}` : SITE.origin;

  // Merge with default keywords
  const allKeywords = [
    ...keywords,
    'international trade law',
    'EAC trade law',
    'COMESA legal services',
    'Uganda law firm',
    'trade policy advisory',
    'regional trade law',
    'legal services Uganda',
    'cross-border trade',
    'investment law',
    'trade compliance',
  ];

  const metadata: Metadata = {
    title: pageTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.origin),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url,
      title: pageTitle,
      description,
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || SITE.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
      creator: '@handeladvocates',
      site: '@handeladvocates',
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  };

  if (article && ogType === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      authors: article.author ? [article.author] : undefined,
      section: article.section,
      tags: article.tags,
    };
  }

  return metadata;
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE.origin}#organization`,
    name: 'Handel Advocates',
    alternateName: 'Handel Global Consulting',
    url: SITE.origin,
    logo: `${SITE.origin}/handel-logo.svg`,
    description:
      'Premier Ugandan law firm offering elite legal services across regional and international trade, corporate law, investment, regulatory compliance, and advisory services in Uganda, EAC, COMESA, and global markets.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressRegion: 'Central',
      addressCountry: 'UG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0.3476,
      longitude: 32.5825,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Uganda',
      },
      {
        '@type': 'Place',
        name: 'East African Community',
      },
      {
        '@type': 'Place',
        name: 'COMESA',
      },
      {
        '@type': 'Continent',
        name: 'Africa',
      },
    ],
    knowsAbout: [
      'International Trade Law',
      'Regional Trade Law',
      'EAC Law',
      'COMESA Law',
      'Corporate Law',
      'Investment Law',
      'Trade Policy',
      'Regulatory Compliance',
      'Trade Agreements',
      'Cross-border Transactions',
      'Legal Advisory',
      'Global Consulting',
    ],
    priceRange: '$$$',
    sameAs: [
      'https://www.linkedin.com/company/handel-advocates',
      'https://twitter.com/handeladvocates',
      'https://facebook.com/handeladvocates',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: ['UG', 'EAC', 'COMESA'],
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal and Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'International Trade Law',
            description:
              'Legal advisory on WTO agreements, regional trade frameworks, customs law, and cross-border trade regulations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate & Commercial Law',
            description:
              'Comprehensive corporate legal services including company formation, contracts, mergers, and acquisitions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment & Regulatory Advisory',
            description: 'Investment structuring, regulatory compliance, and licensing support.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trade Policy & Consulting',
            description:
              'Trade policy development, market access analysis, and strategic consulting services.',
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.origin}${item.url}`,
    })),
  };
}

export function generateWebPageStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.origin}${url}`,
    url: `${SITE.origin}${url}`,
    name: title,
    description,
    isPartOf: {
      '@id': `${SITE.origin}#website`,
    },
    about: {
      '@id': `${SITE.origin}#organization`,
    },
    inLanguage: 'en-US',
  };
}

export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
