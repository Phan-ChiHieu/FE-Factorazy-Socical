import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factozary-Auth',
  description: 'Web Frontend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
