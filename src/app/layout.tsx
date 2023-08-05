import '@/locales/i18n'

import { SettingsProvider } from '@/components/settings/context';
import { LocalizationProvider } from '@/locales';
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
        <ThemeProvider>
          <LocalizationProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              {children}
            </SettingsProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
