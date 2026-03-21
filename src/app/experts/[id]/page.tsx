import { Metadata } from 'next'
import Image from 'next/image'

import PortfolioList from '@/components/features/portfolio-list'
import ReviewItem from '@/components/features/review-item'
import { HomeIcon, StarFillIcon } from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
	title: 'Expert Profile - Tasfin Hasan'
}

export default async function Page({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<main className="py-12">
			<Breadcrumbs classNames={{ base: 'max-w-8xl mx-auto w-full px-6' }}>
				<BreadcrumbItem
					href="/"
					startContent={<HomeIcon className="mr-1 size-4.5 -translate-y-px" />}>
					Home
				</BreadcrumbItem>
				<BreadcrumbItem href="/experts">Experts</BreadcrumbItem>
				<BreadcrumbItem href="/experts/1">Tasfin Hasan</BreadcrumbItem>
			</Breadcrumbs>

			<section className="max-w-8xl mx-auto my-12 flex w-full flex-col justify-between gap-y-8 px-6 xl:flex-row xl:items-center xl:gap-x-10">
				<div className="flex w-full flex-col items-center gap-7 sm:flex-row">
					<div className="relative aspect-square h-auto w-60 shrink-0 overflow-hidden rounded-full sm:w-1/4 sm:rounded-3xl xl:w-50">
						<Image
							src="/experts-avatar/1.jpg"
							alt="Tasfin Hasan's avatar"
							loading="eager"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover"
							fill
						/>
					</div>

					<div className="space-y-6">
						<div className="flex flex-col items-center gap-y-5 sm:flex-row sm:justify-between">
							<div className="flex flex-col items-center sm:items-start">
								<h1 className="font-medIum text-2xl">Tasfin Hasan</h1>
								<p className="text-sm font-medium text-gray-500">
									Graphics Designer
								</p>
							</div>
							<div className="flex items-center gap-x-1.5">
								<StarFillIcon className="text-primary -translate-y-px" />
								<p className="font-medium">4.5</p>
								<p className="ml-3 text-sm font-medium text-gray-500">
									(2 Review)
								</p>
							</div>
						</div>

						<div className="mx-auto h-0.5 w-1/4 rounded-full bg-gray-200/60 sm:hidden" />

						<p className="text-justify sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
							I’m a freelance graphic designer specializing in logo design,
							brand identity, and social media creatives, with 3+ years of
							experience and 150+ completed projects. I maintain a 95% repeat
							client rate by delivering clean, strategic, and fully custom
							designs tailored to each brand’s goals.
						</p>
					</div>
				</div>

				<div className="hidden h-full w-0.5 self-stretch bg-gray-200/60 xl:block" />

				<div className="w-full max-w-xs space-y-7">
					<p className="font-medium">Project completed - 20</p>

					<div className="space-y-5.5">
						<div className="flex h-2 w-full gap-x-1 overflow-hidden rounded-full">
							<span className="basis-[55%] bg-emerald-500" />
							<span className="basis-[30%] bg-amber-400" />
							<span className="basis-[15%] bg-rose-500" />
						</div>

						<div className="space-y-3">
							<div className="flex items-center gap-x-3">
								<div className="size-2 rounded-full bg-emerald-500" />
								<p className="text-sm font-medium">55% - Satisfied</p>
							</div>
							<div className="flex items-center gap-x-3">
								<div className="size-2 rounded-full bg-amber-400" />
								<p className="text-sm font-medium">30% - Neutral</p>
							</div>
							<div className="flex items-center gap-x-3">
								<div className="size-2 rounded-full bg-rose-500" />
								<p className="text-sm font-medium">15% - Dissatisfied</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-8xl mx-auto w-full space-y-8 px-6">
				<h2 className="space-y-4 text-xl font-semibold text-blue-950">
					<p>Top reviews</p>
					<span className="bg-primary-light block h-0.75 w-8 rounded-full" />
				</h2>

				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<ReviewItem
						username="Lauren Patowari"
						rating={4.5}
						comment="Fantastic work! The designer was very responsive and delivered a high-quality logo that perfectly captured my brand's identity. Highly recommended!"
					/>
					<ReviewItem
						username="Michael Johnson"
						rating={4.0}
						comment="Great experience overall. The designer was easy to work with and provided several design options. The final logo was exactly what I wanted."
					/>
					<ReviewItem
						username="Emily Davis"
						rating={5.0}
						comment="I couldn't be happier with the logo design! The designer was professional, creative, and delivered the project ahead of schedule. I highly recommend it!"
					/>
					<ReviewItem
						username="David Wilson"
						rating={3.5}
						comment="The designer was good to work with and provided a decent logo design. However, I felt that the initial concepts could have been more creative. Overall, a satisfactory experience."
					/>
				</ul>
			</section>

			<section className="max-w-8xl mx-auto mt-12 w-full space-y-8 rounded-3xl px-6">
				<h2 className="space-y-4 text-xl font-semibold text-blue-950">
					<p>Portfolio</p>
					<span className="bg-primary-light block h-0.75 w-8 rounded-full" />
				</h2>

				<PortfolioList expertId={id} />
			</section>
		</main>
	)
}
