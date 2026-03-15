'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const MAX_INDEX = 5

export default function PortfolioItem({
	imageSrc,
	handleOpen
}: {
	imageSrc: string
	handleOpen: () => void
}) {
	const [showOverlay, setShowOverlay] = useState(false)

	return (
		<li
			onMouseEnter={() => setShowOverlay(true)}
			onMouseLeave={() => setShowOverlay(false)}
			onClick={handleOpen}
			className="relative h-full w-full cursor-pointer overflow-hidden border-gray-200 p-4 last:border-r last:border-b">
			<div className="relative aspect-3/2 overflow-hidden">
				<Image
					src={imageSrc}
					alt=""
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
					fill
				/>
			</div>

			<AnimatePresence>
				{showOverlay && (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 3 }}
						exit={{ scale: 0 }}
						transition={{
							duration: 1,
							ease: [0.22, 1, 0.36, 1]
						}}
						className="bg-primary/40 absolute top-1/2 left-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full saturate-150 backdrop-blur-xs">
						<h3 className="scale-50 text-center font-mono font-medium text-white">
							Sass Landing
						</h3>
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	)
}
