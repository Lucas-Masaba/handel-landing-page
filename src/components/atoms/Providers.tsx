'use client';

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    disableTransitionOnChange
    defaultTheme="light"
    enableSystem={false}
    forcedTheme="light"
  >
    {children}
  </ThemeProvider>
);

export default Providers;
