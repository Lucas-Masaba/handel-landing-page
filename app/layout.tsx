import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import GoogleAnalytics from '~/components/atoms/GoogleAnalytics';
// import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Libre_Franklin, Lora } from 'next/font/google';
import '~/assets/styles/base.css';
import { generateStructuredData } from '~/utils/seo';

const bodyFont = Libre_Franklin({ 
  subsets: ['latin'], 
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const headingFont = Lora({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  keywords: [
    'international trade law Uganda',
    'EAC trade legal services',
    'COMESA law firm',
    'Uganda law firm',
    'trade policy advisory',
    'regional trade law',
    'cross-border trade legal services',
    'investment law Uganda',
    'corporate law East Africa',
    'trade compliance consulting',
    'Kampala law firm',
    'East African legal services',
    'trade agreements advisory',
    'WTO law',
    'customs law',
    'regulatory compliance Uganda',
  ],
  authors: [{ name: 'Handel Advocates' }],
  creator: 'Handel Advocates',
  publisher: 'Handel Advocates',
  metadataBase: new URL(SITE.origin),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.origin,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Handel Advocates - International Trade & Legal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    creator: '@handeladvocates',
    site: '@handeladvocates',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/handel-logo.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/handel-logo.svg' }],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${bodyFont.variable} ${headingFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased tracking-tight bg-[var(--brand-primary-50)] text-gray-900 dark:bg-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)]">
        <GoogleAnalytics />
        <Providers>
          {/* <Announcement /> */}
          <Header />
          <main className="relative z-0 bg-[var(--brand-primary-50)] dark:bg-[var(--brand-primary-600)]">{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
