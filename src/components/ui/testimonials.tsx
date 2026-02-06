'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { TouchEvent, useRef, useState } from 'react'

import { ArrowIcon, QuoteIcon } from '@/components/icons'
import { TESTIMONIALS } from '@/data/testimonials'

const MIN_SWIPE_DISTANCE = 50

export default function Testimonials() {
	const [index, setIndex] = useState(0)
	const startX = useRef(0)

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
		startX.current = e.changedTouches[0]?.clientX
	}

	function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
		const endX = e.changedTouches[0]?.clientX
		const diffX = endX - startX.current

		if (Math.abs(diffX) < MIN_SWIPE_DISTANCE) return

		if (diffX > 0) setIndex(index > 0 ? index - 1 : 2)
		else setIndex(index < 2 ? index + 1 : 0)
	}

	return (
		<section
			className="relative w-full max-w-2xl"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}>
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
								className="flex w-full max-w-2xl shrink-0 flex-col items-center"
								key={testimonial.id}>
								<div className="relative">
									<QuoteIcon className="absolute top-0 left-0 -z-10 size-10 translate-x-1/3 -translate-y-1/4 sm:size-12 md:size-16" />
									<p className="text-center text-xl leading-8 font-semibold text-blue-950 sm:text-2xl sm:leading-9 md:text-3xl md:leading-12">
										{testimonial.quote}
									</p>
									<QuoteIcon className="absolute right-0 bottom-0 -z-10 size-10 -translate-x-1/3 translate-y-1/4 rotate-180 sm:size-12 md:size-16" />
								</div>

								<div className="mt-12 mb-9 flex flex-col items-center gap-y-3 sm:mt-16 md:mb-12 md:gap-y-5">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										width={82}
										height={82}
										className="rounded-full"
									/>
									<div className="flex flex-col items-center md:space-y-1">
										<p className="text-lg font-semibold md:text-xl">
											{testimonial.name}
										</p>
										<p className="text-sm font-medium text-gray-500">
											{testimonial.title}
										</p>
									</div>
								</div>
							</motion.div>
						)
				)}
			</AnimatePresence>

			<div className="mx-auto flex w-max gap-x-5">
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
				direction="left"
				onClick={() => setIndex(index > 0 ? index - 1 : 2)}
			/>
			<SliderButton
				direction="right"
				onClick={() => setIndex(index < 2 ? index + 1 : 0)}
			/>
		</section>
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
			className={`group absolute top-1/2 hidden size-14 -translate-y-1/2 duration-200 active:scale-70 lg:flex ${direction === 'left' ? '-left-36' : '-right-36'} items-center justify-center rounded-full bg-white`}
			onClick={onClick}>
			<ArrowIcon
				className={`size-5 ${direction === 'left' ? 'rotate-180' : 'rotate-0'}`}
			/>
		</button>
	)
}
