import { HOST_API } from '@/config-global';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`${HOST_API}/enterprise/get-suggest`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}