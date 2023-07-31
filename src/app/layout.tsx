import ThemeProvider from '@/theme';
import { primaryFont } from '@/theme/typography';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factozary',
  description: 'Web Frontend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
