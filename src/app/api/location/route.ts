import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/'],
};

export function middleware(request: NextRequest) {
  const { nextUrl: url, geo } = request;

  const city = geo?.city ?? '';
  const country = geo?.country ?? '';

  url.searchParams.set('city', city);
  url.searchParams.set('country', country);

  return NextResponse.rewrite(url);
}
