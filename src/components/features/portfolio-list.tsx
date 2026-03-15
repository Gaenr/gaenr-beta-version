'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import PortfolioItem from '@/components/features/portfolio-item'
import { ArrowIcon, BriefcaseIcon } from '@/components/icons'
import Modal from '@/components/ui/modal'
import UseModal from '@/hooks/useModal'

const MAX_PORTFOLIO_INDEX = 6

export default function PortfolioList({ expertId }: { expertId: string }) {
	const { isOpen, onOpen, onOpenChange } = UseModal()

	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const params = new URLSearchParams()

	const currentIndex = Number(searchParams.get('portfolio-index'))

	function handleOpen(currentIndex: number) {
		onOpen()

		params.set('portfolio-index', currentIndex.toString())
		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false
		})
	}

	function handleChangeIndex(newIndex: number) {
		params.set('portfolio-index', newIndex.toString())
		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false
		})
	}
	return (
		<>
			<ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] divide-x divide-y divide-gray-200 border-t border-l border-gray-200 sm:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
				{Array.from({ length: 6 }).map((_, i) => (
					<PortfolioItem
						imageSrc={`/portfolios/${i + 1}.jpg`}
						handleOpen={() => handleOpen(i + 1)}
						key={i}
					/>
				))}
			</ul>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				{() => (
					<main className="relative w-[85dvw] overflow-hidden rounded-4xl bg-white sm:w-[70dvw]">
						<section className="no-scrollbar relative h-full max-h-[80dvh] overflow-y-auto bg-white p-6 sm:p-8">
							<article className="space-y-2 sm:space-y-4">
								<h1 className="text-lg font-semibold text-blue-950 sm:text-2xl">
									Greenland Landing page
								</h1>
								<p className="text-sm text-gray-500 sm:text-base">
									The landing page is specially designed for a company that
									offers Mountain and green nature around the whole world.
								</p>
							</article>

							<div className="mt-8 mb-7 flex flex-wrap items-center gap-5">
								<div className="flex items-center gap-x-3">
									<div className="bg-primary flex size-7 items-center justify-center rounded-full rounded-bl-none">
										<BriefcaseIcon className="size-4 text-white" />
									</div>
									<p className="font-medium">Graphics Design</p>
								</div>

								<div className="hidden size-1 rounded-full bg-gray-300 last:hidden sm:block" />

								<div className="hidden flex-wrap items-center gap-3 sm:flex">
									<p className="rounded-full border border-gray-200 px-5 py-1.5 text-sm font-medium">
										Landing Page Design
									</p>
									<p className="rounded-full border border-gray-200 px-5 py-1.5 text-sm font-medium">
										UX Design
									</p>
									<p className="rounded-full border border-gray-200 px-5 py-1.5 text-sm font-medium">
										PSD to HTML
									</p>
								</div>
							</div>

							<Image
								src="/big-portfolio.jpg"
								alt=""
								width={800}
								height={600}
								className="size-full"
							/>
						</section>

						<nav className="bg-primary/40 absolute bottom-1/20 left-1/2 flex -translate-x-1/2 items-center justify-center gap-x-4 rounded-full border-blue-500 p-2 backdrop-blur-sm">
							<button
								className="hover:text-primary flex h-9 w-14 items-center justify-center rounded-full bg-white duration-300 disabled:cursor-default disabled:hover:text-gray-800"
								onClick={() => handleChangeIndex(currentIndex - 1)}
								disabled={currentIndex === 1}>
								<ArrowIcon className="rotate-180" />
							</button>
							<p className="w-12 text-center font-medium text-white">
								{currentIndex} of {MAX_PORTFOLIO_INDEX}
							</p>
							<button
								className="hover:text-primary flex h-9 w-14 items-center justify-center rounded-full bg-white duration-300 disabled:cursor-default disabled:hover:text-gray-800"
								onClick={() => handleChangeIndex(currentIndex + 1)}
								disabled={currentIndex === MAX_PORTFOLIO_INDEX}>
								<ArrowIcon />
							</button>
						</nav>
					</main>
				)}
			</Modal>
		</>
	)
}
