'use client'

import { motion } from 'framer-motion'

import { MessageIcon } from '@/components/icons'

export default function Iphone() {
	return (
		<motion.div
			initial={{
				y: -35,
				scale: 0.9,
				rotateY: -95
			}}
			animate={{
				y: 0,
				scale: 1,
				rotateY: 0
			}}
			transition={{
				repeat: Infinity,
				repeatType: 'loop',
				duration: 1,
				ease: [0.4, 0, 0.2, 1],
				repeatDelay: 2,
				scale: {
					type: 'spring',
					stiffness: 200,
					damping: 15
				}
			}}
			className="absolute top-1/4 left-1/2 z-20 -translate-x-1/2 backface-hidden perspective-[800px] transform-3d">
			<div className="rounded-2xl-plus grid grid-cols-[auto_9rem_auto] items-center gap-x-3 border border-slate-200/30 bg-white/70 p-2.5 shadow-sm saturate-150 backdrop-blur-xl md:grid-cols-[auto_8rem_auto]">
				<div className="flex size-11 items-center justify-center rounded-xl bg-white">
					<MessageIcon className="text-primary size-7" />
				</div>

				<div>
					<p className="text-sm font-medium">Gaenr</p>
					<p className="text-xs text-nowrap">Payment received</p>
				</div>

				<p className="text-primary-dark opacity60 self-start text-xs">now</p>
			</div>
		</motion.div>
	)
}
