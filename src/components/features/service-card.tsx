'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import Button from '@/components/ui/button'
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring
} from 'framer-motion'
import Link from 'next/link'

const MAX = 20

export default function ServiceCard({
	name,
	description,
	link,
	index
}: {
	name: string
	description: string
	link: string
	index: number
}) {
	const ref = useRef<HTMLDivElement>(null)
	const [show, setShow] = useState(false)

	const x = useMotionValue(0)
	const y = useMotionValue(0)

	// This wraps x and y in a spring animation.
	// So whenever x.set() or y.set() changes, it doesn’t jump instantly — it animates toward the new value smoothly.
	const smoothX = useSpring(x, { stiffness: 60, damping: 15 })
	const smoothY = useSpring(y, { stiffness: 60, damping: 15 })

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (!ref.current) return

		// This gets the card’s position and size on the screen.
		const rect = ref.current.getBoundingClientRect()

		const centerX = rect.left + rect.width / 2 || 0
		const centerY = rect.top + rect.height / 2 || 0

		const deltaX = e.clientX - centerX
		const deltaY = e.clientY - centerY

		x.set(Math.max(-MAX, Math.min(MAX, deltaX * 0.2)))
		y.set(Math.max(-MAX, Math.min(MAX, deltaY * 0.2)))
	}

	function handleMouseLeave() {
		x.set(0)
		y.set(0)
	}

	return (
		<Link href={`/services/${link}`}>
			<motion.div
				className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1.5"
				ref={ref}
				onMouseEnter={() => setShow(true)}
				onMouseMove={handleMouseMove}
				onMouseLeave={() => {
					setShow(false)
					handleMouseLeave()
				}}
				style={{
					x: smoothX,
					y: smoothY
				}}>
				<div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl">
					<Image
						src={`/services-thumbnail/${index + 1}.jpg`}
						alt={name}
						className="object-cover"
						fill
					/>
					<div className="absolute top-5 right-4 flex items-center justify-between rounded-full border-2 border-white/30 bg-white/20 px-2 py-1 shadow-lg saturate-150 backdrop-blur-sm duration-200">
						<p className="text-sm font-medium text-nowrap text-white">
							0{index + 1} / 07
						</p>
					</div>
				</div>

				<div className="space-y-2 px-4 py-5">
					<h3 className="text-lg font-semibold">{name}</h3>
					<p className="text-sm font-medium text-gray-500">{description}</p>
				</div>

				<AnimatePresence>
					{show && (
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
	)
}
