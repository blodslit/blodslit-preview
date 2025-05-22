import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug') || ''
  const url = `/artikler/${slug}`

  const response = NextResponse.redirect(url)
  response.cookies.set('__blodslit_preview', 'true', {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  })

  return response
}