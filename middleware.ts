import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const url = request.nextUrl
	const type = url.searchParams.get('type')
	const token = url.searchParams.get('token')

	const referrer = request.headers.get('referer') || url.origin

	if (!token || !type || !['client', 'freelancer'].includes(type))
		return NextResponse.redirect(referrer)

	return NextResponse.next()
}

export const config = {
	matcher: ['/verify-url/:path*']
}
