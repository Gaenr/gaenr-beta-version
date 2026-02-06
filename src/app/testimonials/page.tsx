'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import {
	FacebookIcon,
	LinkedinIcon,
	PlayIcon,
	ShortArrowIcon
} from '@/components/icons'
import Breadcrumbs from '@/components/ui/breadcrumbs'

const TESTIMONIALS = [
	{
		id: 0,
		image: '/testimonials/avatar-full-1.jpg',
		name: 'Darren Dunlap',
		title: 'CEO & Founder at Flex.co',
		quote:
			'Work on your terms every day and still earn a dependable, full-time paycheck',
		videoSrc: 'https://www.youtube.com/embed/gmuTjeQUbTM?si=lUkgTG1KyxuBsmyb',
		facebook: '#',
		linkedin: '#'
	},
	{
		id: 1,
		image: '/testimonials/avatar-full-2.jpg',
		name: 'Elara Moonfall',
		title: 'CEO, Luminary Tech Solutions',
		quote:
			'Achieve a full-time income while designing your own flexible schedule and lifestyle',
		videoSrc: 'https://www.youtube.com/embed/wN13YeqEaqk?si=yJp4cfADehMOD0-2',
		facebook: '#',
		linkedin: '#'
	},
	{
		id: 2,
		image: '/testimonials/avatar-full-3.jpg',
		name: 'Ronan Ashcroft',
		title: 'Founder & CEO, Ashcroft Dynamics',
		quote:
			'Enjoy the freedom of flexible hours while building a reliable income',
		videoSrc: 'https://www.youtube.com/embed/iOeebAM_C5g?si=ipndZkXY_wz9rMte',
		facebook: '#',
		linkedin: '#'
	}
]

export default function Page() {
	const [showModal, setShowModal] = useState(false)
	const [index, setIndex] = useState(1)

	return (
		<>
			<main>
				<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-12">
					<Breadcrumbs href="testimonials" title="Testimonials" />

					<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
						<h1 className="text-center text-3xl font-semibold text-white">
							Header
						</h1>
						<p className="hidden text-center text-white sm:block">Subheading</p>
					</article>
				</section>

				<section className="mx-auto my-12 w-full max-w-5xl px-6 lg:mt-24 lg:mb-16">
					<AnimatePresence mode="wait">
						{TESTIMONIALS.map(
							(testimonial) =>
								index === testimonial.id && (
									<motion.div
										initial={{
											opacity: 0,
											scale: 0.95,
											filter: 'blur(4px)'
										}}
										animate={{
											opacity: 1,
											scale: 1,
											filter: 'blur(0px)'
										}}
										exit={{
											opacity: 0,
											scale: 0.95,
											filter: 'blur(4px)'
										}}
										transition={{
											duration: 0.3,
											ease: [0.4, 0, 0.2, 1]
										}}
										className="grid grid-cols-1 gap-12 md:grid-cols-6"
										key={testimonial.id}>
										<div className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden rounded-4xl bg-gray-200 md:col-span-2">
											<Image
												src={testimonial.image}
												alt=""
												fill
												className="object-cover"
											/>

											<button
												className="absolute bottom-8 left-1/2 flex w-[75%] -translate-x-1/2 cursor-pointer items-center justify-between rounded-full border-2 border-white/10 bg-white/20 px-5 py-3 text-center text-sm font-medium text-nowrap text-white saturate-150 backdrop-blur-lg duration-200 hover:bg-white/35"
												onClick={() => setShowModal(true)}>
												Watch Testimonial
												<PlayIcon className="size-5 rounded-full p-1 ring ring-offset-1" />
											</button>
										</div>

										<div className="flex flex-col justify-between gap-y-8 md:col-span-4 md:my-10">
											<p className="text-center text-xl md:text-start lg:text-2xl">
												{testimonial.quote}
											</p>

											<div className="flex flex-col items-center justify-between gap-y-6 md:flex-row">
												<div className="flex flex-col items-center md:items-start md:space-y-1">
													<p className="text-lg font-semibold md:text-xl">
														{testimonial.name}
													</p>
													<p className="text-sm font-medium text-gray-500">
														{testimonial.title}
													</p>
												</div>

												<div className="flex items-center gap-x-6">
													<Link
														href={testimonial.facebook}
														className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-800 active:text-gray-800`}>
														<FacebookIcon className="h-4 w-auto" />
													</Link>
													<Link
														href={testimonial.linkedin}
														className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-800 active:text-gray-800`}>
														<LinkedinIcon className="h-4 w-auto" />
													</Link>
												</div>
											</div>
										</div>
									</motion.div>
								)
						)}
					</AnimatePresence>
				</section>

				<section className="mx-auto my-12 grid w-full max-w-5xl grid-cols-6 gap-12 px-6 lg:mt-16 lg:mb-20">
					<div className="col-span-2 flex w-full items-center justify-center gap-x-6">
						<SliderButton
							direction="left"
							onClick={() => setIndex(index > 0 ? index - 1 : 2)}
						/>
						<div className="flex gap-x-5">
							{Array.from({ length: 3 }).map((_, i) => (
								<button
									className="relative size-2 overflow-hidden rounded-full bg-gray-300 md:size-2.5"
									onClick={() => setIndex(i)}
									key={i}>
									<AnimatePresence mode="wait">
										{index === i && (
											<motion.div
												initial={{ scale: 0, opacity: 0 }}
												animate={{ scale: [0, 1.2, 1], opacity: 1 }}
												exit={{ scale: 0.8, opacity: 0 }}
												transition={{
													duration: 0.4,
													scale: {
														times: [0, 0.7, 1],
														duration: 0.6
													}
												}}
												className="bg-primary absolute inset-0 size-full rounded-full"
												key={i}
											/>
										)}
									</AnimatePresence>
								</button>
							))}
						</div>
						<SliderButton
							direction="right"
							onClick={() => setIndex(index < 2 ? index + 1 : 0)}
						/>
					</div>
				</section>
			</main>

			<AnimatePresence>
				{showModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className="fixed inset-0 z-9999 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-sm"
						onClick={() => setShowModal(false)}>
						<div
							className="w-[80dvw] overflow-hidden rounded-3xl border-4 border-white bg-gray-200"
							onClick={(e) => e.stopPropagation()}>
							<iframe
								src={TESTIMONIALS[index].videoSrc}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								className="aspect-video"
								allowFullScreen></iframe>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

function SliderButton({
	direction,
	onClick
}: {
	direction?: 'left' | 'right'
	onClick: () => void
}) {
	return (
		<button
			className={`group flex size-7 rounded-full border-2 border-gray-300 p-1 duration-200 hover:border-gray-400 active:scale-70 ${direction === 'left' ? '-left-36' : '-right-36'} items-center justify-center rounded-full bg-white`}
			onClick={onClick}>
			<ShortArrowIcon
				className={`size-5 text-gray-600 ${direction === 'left' ? 'rotate-180' : 'rotate-0'}`}
			/>
		</button>
	)
}
