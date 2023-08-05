import HomeLayoutView from '@/layouts/home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factozary',
  description: 'Web Frontend',
};

export default function HomeLayout({ children }: { children: React.ReactNode}) {
  return <HomeLayoutView>{children}</HomeLayoutView>;
}
