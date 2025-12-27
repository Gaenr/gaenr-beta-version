import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://imgur.com/**')],
		unoptimized: true
	},
	async headers() {
		return [
			{
				source: '/sw.js',
				headers: [
					{
						key: 'Content-Type',
						value: 'application/javascript; charset=utf-8'
					},
					{
						key: 'Cache-Control',
						value: 'no-cache, no-store, must-revalidate'
					},
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self'"
					}
				]
			}
		]
	}
}

export default nextConfig
