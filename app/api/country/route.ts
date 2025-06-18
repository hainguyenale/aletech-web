import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country')
  return NextResponse.json({ country })
} 