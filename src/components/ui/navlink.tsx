import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
	children,
	href
}: {
	children: React.ReactNode
	href: string
}) {
	const pathname = usePathname()

	return (
		<li className="relative overflow-x-hidden">
			<Link
				href={href}
				className={`${pathname === href ? 'text-primary' : 'hover:text-primary text-zinc-700'} relative font-medium duration-200`}>
				{children}
			</Link>
			<AnimatePresence mode="wait">
				{pathname === href && (
					<motion.div
						initial={{
							x: '-100%'
						}}
						animate={{
							x: '0%'
						}}
						exit={{
							x: '100%'
						}}
						transition={{
							duration: 0.2
						}}
						className="bg-primary absolute bottom-0 h-0.5 w-full rounded-full"
					/>
				)}
			</AnimatePresence>
		</li>
	)
}
