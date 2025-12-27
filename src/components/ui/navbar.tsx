'use client'

import Image from 'next/image'

import Link from 'next/link'
import { useState } from 'react'

import { CloseIcon, MenuIcon } from '@/components/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/services',
		label: 'Services'
	},
	{
		href: '/feedback',
		label: 'Feedback'
	},
	{
		href: '/testimonials',
		label: 'Testimonials'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
]

export default function NavBar() {
	const pathname = usePathname()
	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<nav className="sticky inset-x-0 top-0 z-8000 flex h-auto w-full flex-wrap items-center justify-center border-b border-zinc-100 bg-white/70 backdrop-blur-lg backdrop-saturate-150">
				<div className="max-w-8xl flex h-(--navbar-height) w-full flex-nowrap items-center justify-between px-6">
					<ul>
						<li>
							<Link href="/" className="flex items-center gap-x-3 lg:gap-x-4">
								<div className="relative size-9 lg:size-11">
									<Image src="/svgs/logo.svg" alt="Logo" fill />
								</div>
								<p className="text-3xl font-bold text-gray-800 lg:text-4xl">
									Gaenr
								</p>
							</Link>
						</li>
					</ul>
					<ul className="lg:hidden">
						<li onClick={() => setShowMenu(!showMenu)}>
							<AnimatePresence mode="wait">
								{showMenu ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										transition={{ duration: 0.1 }}
										key="close">
										<CloseIcon className="size-6 text-zinc-700/50" />
									</motion.div>
								) : (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										transition={{ duration: 0.1 }}
										key="open">
										<MenuIcon className="size-6.5 text-zinc-700" />
									</motion.div>
								)}
							</AnimatePresence>
						</li>
					</ul>
					<ul className="hidden items-center gap-x-8 lg:flex">
						{navLinks.map(({ href, label }) => (
							<li className="relative overflow-x-hidden" key={href}>
								<Link
									href={href}
									className={`${pathname === href ? 'text-primary' : 'hover:text-primary text-zinc-700'} relative font-medium duration-200`}>
									{label}
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
						))}
						<li>
							<Link
								href="/"
								className="from-brand-600 to-brand-700 rounded-full bg-linear-to-br px-4 py-2 text-sm font-medium tracking-wide text-white capitalize duration-200">
								Assign Task
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<AnimatePresence mode="wait">
				{showMenu && (
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{
							type: 'spring',
							damping: 25,
							stiffness: 300,
							mass: 0.5
						}}
						className="fixed inset-x-0 top-(--navbar-height) z-999 flex h-[calc(100vh-var(--navbar-height))] origin-top flex-col border-b border-zinc-100 bg-white/90 p-8 backdrop-blur-lg backdrop-saturate-150 lg:hidden"
						key="menu">
						<ul className="flex max-w-full flex-col gap-y-4">
							<li className="mb-2">
								<Link
									href="/"
									className="from-brand-600 to-brand-700 rounded-md bg-linear-to-br px-3 py-1.5 text-sm font-medium tracking-wide text-white capitalize duration-200"
									onClick={() => setShowMenu(false)}>
									Assign Task
								</Link>
							</li>
							{navLinks.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className={`font-medium ${pathname === href ? 'text-primary border-primary border-b-2' : 'text-zinc-700'} pb-px`}
										onClick={() => setShowMenu(false)}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
