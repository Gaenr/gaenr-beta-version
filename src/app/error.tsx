'use client'

import { AlertIcon, ReplayIcon } from '@/components/icons'
import { useEffect } from 'react'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="flex h-[calc(100dvh-var(--navbar-height))] flex-col items-center gap-y-8 py-16">
			<div className="flex flex-col items-center gap-y-4">
				<AlertIcon className="size-12" />
				<h1 className="text-2xl font-semibold text-blue-950">
					An error occurred
				</h1>
				<p className="max-w-xl text-center text-gray-500">
					{error.message || 'Something went wrong. Please try again.'}
				</p>
			</div>

			<button
				className="flex h-12 items-center gap-x-2.5 rounded-full border-2 border-gray-800 bg-white px-6 text-lg font-medium duration-200 active:scale-90"
				onClick={reset}>
				<ReplayIcon className="size-5 -rotate-45" />
				Reset
			</button>
		</div>
	)
}
