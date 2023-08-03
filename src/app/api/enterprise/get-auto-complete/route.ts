import { HOST_API } from '@/config-global';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const content = searchParams.get('content');
  const res = await fetch(`${HOST_API}/enterprise/get-auto-complete`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
