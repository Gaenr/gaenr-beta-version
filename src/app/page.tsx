import Link from 'next/dist/client/link'
import Image from 'next/image'

import ServiceBox from '@/components/features/service-box'
import { ArrowIcon, BadgeCheckIcon, MessageIcon } from '@/components/icons'
import Button from '@/components/ui/button'
import Header from '@/components/ui/header'
import MiniLink from '@/components/ui/mini-link'
import { SERVICE_NAMES } from '@/utils/constants'

import iPhoneMockup from '../../public/svgs/iPhone-mockup.svg'

export default function Page() {
	return (
		<div>
			<Header />

			<main className="flex flex-col gap-y-24 py-12 lg:py-24">
				{/* Section 1 */}
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 1 left */}
					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:items-start sm:gap-y-2 sm:text-3xl">
							<p>More than a platform</p>
							<p className="text-brand-800">A pathway</p>
						</h2>
						<div className="space-y-3">
							<p>
								Gaenr is a straightforward freelancing platform built for
								Bangladesh's fastest-growing problem: skilled people who need
								work, and busy people who need that skilled work done, but the
								old way doesn't work for either side.
							</p>
							<p>
								We've removed the friction. No unnecessary layers. No waiting
								for approvals. Just you, the expert you need, and a simple
								process that actually works.
							</p>
						</div>

						<Link
							href="/about"
							className="text-primary flex items-center gap-x-1 self-start border-b-2 border-current leading-0 font-medium duration-200 hover:border-transparent">
							Know more <ArrowIcon className="size-5" />
						</Link>
					</article>

					{/* Section 1 right */}
					<div>Content right</div>
				</section>

				{/* Section 2 */}
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 2 left */}
					<div>content left</div>

					{/* Section 2 right */}
					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:items-start sm:gap-y-2 sm:text-3xl">
							<p>We're still building</p>
							<p className="text-brand-800">But you can start today</p>
						</h2>
						<div className="space-y-3">
							<p>
								This is our beta version, and we're being honest about it. We're
								not offering full automation yet, but that's actually our
								strength right now.
							</p>
							<p>
								Here's what you get: A team that handles the heavy lifting for
								you. We talk to your expert. We confirm your requirements. We
								make sure everything runs smoothly. You get the results without
								the hassle.
							</p>
							<p>
								We're testing this with you because your feedback matters. Tell
								us what works, what doesn't, and what you wish existed. Then
								we'll come back with even better features based on what you've
								taught us.
							</p>
						</div>

						<MiniLink href="/feedback">Share your feedback</MiniLink>
					</article>
				</section>

				{/* Section 3 */}
				<section className="lg:max-w-8xl mx-auto flex w-full flex-col items-center gap-y-12 px-6 lg:items-start">
					<h2 className="flex flex-col items-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:flex-row sm:gap-x-2.5 sm:text-3xl">
						<p>Services that</p>
						<p className="text-brand-800">move you forward</p>
					</h2>

					<div className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] justify-center gap-x-5 gap-y-9 self-stretch min-[500px]:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
						{SERVICE_NAMES.map((serviceName, id) => (
							<ServiceBox id={id} key={serviceName}>
								{serviceName}
							</ServiceBox>
						))}
					</div>

					<MiniLink href="/services">Let's explore</MiniLink>
				</section>

				{/* Section 4 */}
				<div className="space-y-16 bg-[url('/xyz.svg')] bg-cover bg-no-repeat py-16 md:py-24">
					<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
						<div className="">left content</div>

						{/* Section 4 right */}
						<div className="space-y-10">
							<p className="text-brand-800 text-lg font-semibold">
								For clients
							</p>

							<ul className="grid grid-cols-1 items-start gap-y-7 px-4 md:grid-cols-2 md:gap-10 lg:grid-cols-1 lg:gap-y-7 2xl:grid-cols-2 2xl:gap-10">
								<li className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5">
									<div className="bg-brand-600 row-start-1 row-end-3 flex size-9 shrink-0 flex-nowrap items-center justify-center rounded-full border-4 border-blue-200">
										<BadgeCheckIcon className="size-4.5 text-white" />
									</div>
									<p className="font-medium">0% Platform Fee</p>
									<p className="text-sm font-medium text-zinc-500">
										Pay only for work done
									</p>
								</li>

								<li className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5">
									<div className="bg-brand-600 row-start-1 row-end-3 flex size-9 items-center justify-center rounded-full border-4 border-blue-200">
										<BadgeCheckIcon className="size-4 text-white" />
									</div>
									<p className="font-medium">Hassle-free Process</p>
									<p className="text-sm font-medium text-zinc-500">
										No platform chaos; we manage it for you
									</p>
								</li>

								<li className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5">
									<div className="bg-brand-600 row-start-1 row-end-3 flex size-9 items-center justify-center rounded-full border-4 border-blue-200">
										<BadgeCheckIcon className="size-4 text-white" />
									</div>
									<p className="font-medium">Secure Payment Handling</p>
									<p className="text-sm font-medium text-zinc-500">
										Every transaction is protected and transparent
									</p>
								</li>

								<li className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5">
									<div className="bg-brand-600 row-start-1 row-end-3 flex size-9 items-center justify-center rounded-full border-4 border-blue-200">
										<BadgeCheckIcon className="size-4 text-white" />
									</div>
									<p className="font-medium">Verified Experts</p>
									<p className="text-sm font-medium text-zinc-500">
										Handpicked talent ready for real work
									</p>
								</li>
							</ul>
						</div>
					</section>
				</div>

				{/* Section 5 */}
				<section></section>

				{/* Section 6 */}
				<section></section>

				{/* Section 7 */}
				<div className="sm:px-6">
					<section className="bg-primary relative mx-auto flex w-full max-w-6xl flex-col gap-y-8 overflow-hidden p-10 sm:rounded-3xl">
						<article className="relative z-10 w-full sm:space-y-4">
							<h3 className="flex flex-col items-center justify-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-white sm:gap-x-2.5 sm:text-3xl lg:flex-row">
								<p>Got skills?</p>
								<p className="text-center lg:text-left">
									Let’s turn them into opportunity
								</p>
							</h3>
							<p className="hidden text-sky-200 sm:block lg:text-lg">
								Join Gaenr to access real demand, fair pay, and support that
								understands Bangladesh’s market. No more undercutting; just fair
								rates, fast payments, and continuous work.
							</p>
						</article>

						<div className="relative z-10 mx-auto grid w-full grid-cols-1 place-items-center gap-y-14 md:grid-cols-2">
							<div className="flex flex-col gap-y-8 md:gap-y-10">
								<p className="hidden text-xl font-semibold text-white md:-mb-4 md:block">
									Why join?
								</p>

								<ul className="space-y-4">
									<li className="flex items-center gap-x-3">
										<BadgeCheckIcon className="size-5 shrink-0 text-white" />
										<p className="text-white">
											Guaranteed payments, no global barriers
										</p>
									</li>
									<li className="flex items-center gap-x-3">
										<BadgeCheckIcon className="size-5 shrink-0 text-white" />
										<p className="text-white">
											Real clients, local opportunities
										</p>
									</li>
									<li className="flex items-center gap-x-3">
										<BadgeCheckIcon className="size-5 shrink-0 text-white" />
										<p className="text-white">
											Build your portfolio & earn fairly
										</p>
									</li>
								</ul>

								<Button>Become an Expert</Button>
							</div>

							<div className="relative w-55 md:w-full md:max-w-45">
								<Image
									src={iPhoneMockup}
									alt="iPhone mockup"
									className="w-full"
								/>

								<div className="absolute top-1/4 left-1/2 -translate-x-1/2">
									<div className="rounded-2xl-plus grid grid-cols-[auto_9rem_auto] items-center gap-x-3 border border-slate-200/30 bg-white/70 p-2.5 shadow-sm saturate-150 backdrop-blur-xl md:grid-cols-[auto_8rem_auto]">
										<div className="flex size-11 items-center justify-center rounded-xl bg-white bg-linear-to-br">
											<MessageIcon className="text-primary size-7" />
										</div>

										<div>
											<p className="text-sm font-medium">Gaenr</p>
											<p className="text-xs text-nowrap">Payment received</p>
										</div>

										<p className="text-brand-800 opacity60 self-start text-xs">
											now
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="pointer-events-none absolute inset-0 size-full opacity-25">
							<Image
								src="/svgs/wallpaper.svg"
								alt="wallpaper"
								className="scale-350"
								fill
							/>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
