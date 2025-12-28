'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { InstallIcon } from '@/components/icons'

export default function InstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handler = (e: Event) => setDeferredPrompt(e)
		window.addEventListener('beforeinstallprompt', handler)

		return () => window.removeEventListener('beforeinstallprompt', handler)
	}, [])

	const installApp = async () => {
		if (!deferredPrompt) return

		const promptEvent = deferredPrompt as any
		promptEvent.prompt()
		await promptEvent.userChoice

		setDeferredPrompt(null)
		setIsVisible(false)
	}

	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
						className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-end bg-black/70 p-4 backdrop-blur-xs"
						onClick={() => {
							setIsVisible(false)
						}}>
						<motion.div
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ duration: 0.25, ease: 'easeOut' }}
							className="rounded-2xl-plus w-full max-w-sm space-y-4 bg-white p-6"
							onClick={(e) => e.stopPropagation()}>
							<div className="flex flex-wrap items-center gap-x-2">
								<Image
									src="/svgs/logo.svg"
									alt="App Icon"
									width={28}
									height={28}
								/>
								<p className="text-xl font-bold text-gray-800">Gaenr</p>
								<div className="grow" />
								<button
									className="from-brand-600 to-brand-700 flex items-center justify-center gap-x-2 rounded-full bg-linear-to-br px-4 py-2 text-sm font-medium tracking-wide text-white"
									onClick={installApp}>
									<InstallIcon className="size-3" />
									Install
								</button>
							</div>
							<p className="text-sm">
								Install Gaenr for fast, seamless access anytime.
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
