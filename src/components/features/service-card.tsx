'use client'

import Button from '@/components/ui/button'
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'

const MAXIMUM_OFFSET = 20

export default function ServiceCard({
	name,
	description,
	imageSrc,
	href,
	index
}: {
	name: string
	description: string
	imageSrc: string
	href: string
	index: number
}) {
	const ref = useRef<HTMLDivElement>(null)
	const [showOverlay, setShowOverlay] = useState(false)

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	const smoothX = useSpring(x, { stiffness: 60, damping: 15 })
	const smoothY = useSpring(y, { stiffness: 60, damping: 15 })

	const canHover =
		typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		if (!ref.current) return

		const rect = ref.current.getBoundingClientRect()

		const centerX = rect.left + rect.width / 2 || 0
		const centerY = rect.top + rect.height / 2 || 1

		const deltaX = e.clientX - centerX
		const deltaY = e.clientY - centerY

		x.set(Math.max(-MAXIMUM_OFFSET, Math.min(MAXIMUM_OFFSET, deltaX * 0.2)))
		y.set(Math.max(-MAXIMUM_OFFSET, Math.min(MAXIMUM_OFFSET, deltaY * 0.2)))
	}

	function handleMouseLeave() {
		x.set(0)
		y.set(0)
	}

	return (
		<li>
			<Link href={href}>
				<motion.div
					ref={ref}
					className="relative size-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-1.5"
					onMouseEnter={canHover ? () => setShowOverlay(true) : undefined}
					onMouseMove={canHover ? handleMouseMove : undefined}
					onMouseLeave={
						canHover
							? () => {
									setShowOverlay(false)
									handleMouseLeave()
								}
							: undefined
					}
					style={{
						x: smoothX,
						y: smoothY
					}}>
					<div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl">
						<Image
							src={imageSrc}
							alt={name}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover"
							fill
						/>
						<div className="absolute top-5 right-4 flex items-center justify-between rounded-full bg-white/20 px-3.5 py-1.5 shadow-lg saturate-150 backdrop-blur-sm">
							<p className="text-sm font-medium text-nowrap text-white">
								{index + 1} / 6
							</p>
						</div>
					</div>

					<div className="space-y-2 px-3 py-5">
						<h3 className="text-lg font-semibold text-blue-950">{name}</h3>
						<p className="text-sm font-medium text-gray-500">{description}</p>
					</div>

					<AnimatePresence>
						{showOverlay && (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 3 }}
								exit={{ scale: 0 }}
								transition={{
									duration: 0.9,
									ease: [0.22, 1, 0.36, 1]
								}}
								className="bg-primary/40 absolute top-1/2 left-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full saturate-150 backdrop-blur-xs">
								<Button className="scale-35 text-base">View Service</Button>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</Link>
		</li>
	)
}
