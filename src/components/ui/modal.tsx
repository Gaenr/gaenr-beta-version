import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'

export default function Modal({
	children,
	isOpen,
	onOpenChange
}: {
	children: (onClose?: () => void) => ReactNode
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}) {
	useEffect(() => {
		if (!isOpen) return

		const defaultOverflow = document.body.style.overflow

		function callback(e: KeyboardEvent) {
			if (e.key === 'Escape') onOpenChange(false)
		}

		document.body.style.overflow = 'hidden'
		document.addEventListener('keydown', callback)

		return () => {
			document.body.style.overflow = defaultOverflow
			document.removeEventListener('keydown', callback)
		}
	}, [isOpen])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className="fixed inset-0 z-9999 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-sm"
					onClick={() => onOpenChange(false)}>
					<div onClick={(e) => e.stopPropagation()}>
						{children(() => onOpenChange(false))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
