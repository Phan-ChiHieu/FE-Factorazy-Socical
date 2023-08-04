import HomeLayoutView from '@/layouts/home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factozary',
  description: 'Web Frontend',
};

export default function HomeLayout({ children, searchParams }: { children: React.ReactNode; searchParams: any }) {
  const city = searchParams?.city;
  console.log(city);
  return <HomeLayoutView>{children}</HomeLayoutView>;
}
