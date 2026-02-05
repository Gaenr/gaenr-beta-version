'use client'

import { Logo } from '@/components/ui/logo'
import { motion } from 'framer-motion'

export default function LogoCard() {
	return (
		<div className="group shrink0 relative w-full max-w-xs">
			<div className="shadow-card z-10 aspect-square w-full rounded-4xl bg-white p-14 duration-500 hover:-translate-x-6 hover:-translate-y-6">
				<motion.div
					initial={{
						scale: 0,
						opacity: 0
					}}
					animate={{
						scale: 1,
						opacity: 1
					}}
					transition={{
						duration: 0.8,
						ease: 'easeOut',
						repeat: Infinity,
						repeatDelay: 1,
						repeatType: 'reverse'
					}}>
					<Logo className="h-auto w-full" />
				</motion.div>
			</div>
			<div className="from-primary-dark to-primary-light absolute right-0 bottom-0 -z-10 size-full scale-95 rounded-4xl bg-linear-to-br duration-500 group-hover:-right-6 group-hover:-bottom-6" />
		</div>
	)
}
