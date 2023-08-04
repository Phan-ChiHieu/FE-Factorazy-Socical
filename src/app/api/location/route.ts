import { HOST_API, HOST_API_LOCATI0N } from '@/config-global';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(HOST_API_LOCATI0N!, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
