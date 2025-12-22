import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
// import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/handel-logo.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/handel-logo.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        {/* <link rel="alternate icon" href="/favicon.ico" /> */}
      </head>
      <body className="antialiased tracking-tight bg-[var(--brand-primary-50)] text-gray-900 dark:bg-[var(--brand-primary-600)] dark:text-[var(--brand-accent-500)]">
        <Providers>
          {/* <Announcement /> */}
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
