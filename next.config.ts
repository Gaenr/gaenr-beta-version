import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL('https://imgur.com/**')],
		unoptimized: true
	}
}

export default nextConfig
