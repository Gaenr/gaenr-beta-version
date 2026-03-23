import { Metadata } from 'next'

import { FourOFourIcon } from '@/components/icons'

export const metadata: Metadata = {
	title: 'Page Not Found'
}

export default function NotFound() {
	return (
		<div className="flex h-[calc(100dvh-var(--navbar-height))] flex-col items-center gap-y-4 py-16">
			<FourOFourIcon className="mb-1 size-20" />
			<h1 className="text-2xl font-semibold text-blue-950">Page not found</h1>
			<p className="max-w-xl text-center text-gray-500">
				The page you are looking for does not exist. Please check the URL and
				try again.
			</p>
		</div>
	)
}
