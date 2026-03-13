import { ShortArrowIcon, StarFillIcon } from '@/components/icons'
import { HomeIcon } from '@/components/icons/home'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<main className="flex flex-col py-12 lg:pb-24">
			<nav className="max-w-8xl mx-auto flex w-full items-center gap-x-2 px-6">
				<div className="group contents">
					<HomeIcon className="group-hover:text-primary size-4.5 -translate-y-px duration-200" />
					<Link
						href="/"
						className="group-hover:text-primary font-medium duration-200">
						Home
					</Link>
				</div>
				<ShortArrowIcon className="size-5" />
				<Link href="#" className="hover:text-primary font-medium duration-200">
					Experts
				</Link>
				<ShortArrowIcon className="size-5" />
				<Link href="#" className="hover:text-primary font-medium duration-200">
					Tasfin Hasan
				</Link>
			</nav>

			<section className="max-w-8xl mx-auto my-10 flex w-full items-center justify-between gap-x-8 px-6">
				<div className="flex w-full items-center gap-x-6 border-r border-gray-200/60 pr-10">
					<Image
						src="/user.jpg"
						alt="Tasfin Hasan"
						className="rounded-3xl"
						width={172}
						height={172}
					/>

					<div className="space-y-4">
						<div className="flex justify-between">
							<div>
								<p className="text-xl font-medium">Tasfin Hasan</p>
								<p className="text-sm font-medium text-gray-500">
									Graphics Designer
								</p>
							</div>

							<div className="flex items-center gap-x-4">
								<div className="flex items-center gap-x-1.5 font-medium">
									<StarFillIcon className="text-primary -translate-y-px" />
									4.5
								</div>
								<div className="text-sm text-gray-500">(2 Review)</div>
							</div>
						</div>

						<p className="text-justify">
							I’m a freelance graphic designer specializing in logo design,
							brand identity, and social media creatives, with 3+ years of
							experience and 150+ completed projects. I maintain a 95% repeat
							client rate by delivering clean, strategic, and fully custom
							designs tailored to each brand’s goals.
						</p>
					</div>
				</div>

				<div className="w-full max-w-xs">
					<p className="mt-3 mb-7 font-medium">Project completed - 20</p>

					<div className="space-y-5">
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

			<section className="max-w-8xl w-full mx-auto my-24 px-6">
				<h2 className="text-xl font-semibold text-blue-950">Portfolio</h2>
			</section>
		</main>
	)
}
