import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const preview = request.cookies.get('__blodslit_preview')
  const response = NextResponse.next()

  if (preview?.value === 'true') {
    response.headers.set('x-preview-mode', 'true')
  }

  return response
}