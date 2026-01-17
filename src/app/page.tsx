import Image from 'next/image'

import PaymentBox from '@/components/features/payment-box'
import ServiceBox from '@/components/features/service-box'
import {
	BadgeCheckIcon,
	MessageIcon,
	VideoEditingIcon
} from '@/components/icons'
import Button from '@/components/ui/button'
import Header from '@/components/ui/header'
import MiniLink from '@/components/ui/mini-link'

import { CLIENT_BENEFITS } from '@/data/clients-benefit'
import { PAYMENT_PROCESS_STEPS } from '@/data/payment-process-steps'

import { SERVICE_NAMES } from '@/utils/constants'

import iPhoneMockup from '../../public/svgs/iPhone-mockup.svg'

export default function Page() {
	return (
		<div>
			<Header />

			<main className="flex flex-col gap-y-24 py-12 lg:py-24">
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 1 left */}
					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:items-start sm:gap-y-2 sm:text-3xl">
							<p>More than a platform</p>
							<p className="text-primary-dark">A pathway</p>
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

						<MiniLink href="/about">Know more</MiniLink>
					</article>

					{/* Section 1 right */}
					<div className="relative mx-auto aspect-4/3 w-full max-w-sm">
						<Image src="/svgs/brand-arrow.svg" alt="Brand Arrow" fill />
					</div>
				</section>

				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 2 left */}
					<div>content left</div>

					{/* Section 2 right */}
					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:items-start sm:gap-y-2 sm:text-3xl">
							<p>We're still building</p>
							<p className="text-primary-dark">But you can start today</p>
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

				<section className="lg:max-w-8xl mx-auto flex w-full flex-col items-center gap-y-12 px-6 lg:items-start">
					<h2 className="flex flex-col items-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:flex-row sm:gap-x-2.5 sm:text-3xl">
						<p>Services that</p>
						<p className="text-primary-dark">move you forward</p>
					</h2>

					<ul className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] justify-center gap-x-5 gap-y-9 self-stretch min-[500px]:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
						{SERVICE_NAMES.map((serviceName, id) => (
							<ServiceBox id={id} key={serviceName}>
								{serviceName}
							</ServiceBox>
						))}
					</ul>

					<MiniLink href="/services">Let's explore</MiniLink>
				</section>

				<div className="space-y-16 bg-[url('/xyz.svg')] bg-cover bg-no-repeat py-16 md:py-24">
					<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
						<div className="">left content</div>

						{/* Section 4 right */}
						<div className="space-y-10">
							<p className="text-primary-dark text-lg font-semibold">
								For clients
							</p>

							<ul className="grid grid-cols-1 items-start gap-y-7 px-4 md:grid-cols-2 md:gap-10 lg:grid-cols-1 lg:gap-y-7 2xl:grid-cols-2 2xl:gap-10">
								{CLIENT_BENEFITS.map(({ title, description }) => (
									<li
										className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5"
										key={title}>
										<div className="bg-brand-600 row-start-1 row-end-3 flex size-7 shrink-0 flex-nowrap items-center justify-center rounded-full ring-4 ring-blue-200 duration-200 group-hover:ring-0">
											<BadgeCheckIcon className="size-4 text-white" />
										</div>
										<p className="font-medium">{title}</p>
										<p className="text-sm font-medium text-zinc-500">
											{description}
										</p>
									</li>
								))}
							</ul>
						</div>
					</section>
				</div>

				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:items-start lg:gap-x-24">
					<div className="col-span-full">
						<h2 className="flex flex-col items-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-zinc-700 sm:flex-row sm:gap-x-2.5 sm:text-3xl">
							<p className="text-primary-dark">Fast simple secure</p>
							<p>payment process</p>
						</h2>
					</div>

					<div className="lg:gapy-y-12 -flex relative hidden w-full flex-col items-start gap-y-8">
						<div className="w-full rounded-3xl border border-blue-100/30 bg-blue-100/30 p-5">
							<p className="mb-2 text-xs font-semibold text-zinc-500">
								Payment method
							</p>

							<ul className="grid grid-cols-3 gap-x-1 overflow-x-auto rounded-lg bg-blue-100/30 p-1">
								<li className="flex min-w-50 items-center justify-center gap-x-3 rounded-lg border-blue-100 py-3 font-medium text-zinc-400">
									<Image
										src="/svgs/bkash.svg"
										alt="Bkash Icon"
										width={32}
										height={32}
									/>
									<p className="font-medium text-zinc-500">Bkash</p>
								</li>

								<li className="flex items-center justify-center gap-x-3 bg-white px-5 py-2.5 font-medium text-zinc-400">
									<Image
										src="/svgs/nagad.svg"
										alt="Nagad Icon"
										width={24}
										height={24}
									/>
									<p className="text-sm font-medium text-zinc-500">Nagad</p>
								</li>

								<li className="flex items-center justify-center gap-x-3 rounded-r-full bg-white px-5 py-2.5 font-medium text-zinc-400">
									<Image
										src="/svgs/upai.svg"
										alt="Upai Icon"
										width={24}
										height={24}
									/>
									<p className="text-sm font-medium text-zinc-500">Upai</p>
								</li>
							</ul>

							<div className="my-5">
								<p className="mb-4 flex w-full items-center gap-x-2 text-xs font-medium">
									<VideoEditingIcon className="text-primary size-4" />
									Graphics Design
									<span className="ml-auto">x1</span>
								</p>
								<p className="text-lg font-medium">23,000 BDT</p>
								<p className="text-sm text-zinc-500">
									Securely pay with your preferred method
								</p>
							</div>

							<Button>Pay Now</Button>
						</div>
					</div>
					<div></div>

					<ul className="grid grid-cols-1 gap-y-8">
						{PAYMENT_PROCESS_STEPS.map(({ title, description }, id) => (
							<PaymentBox
								title={title}
								description={description}
								id={id}
								key={title}
							/>
						))}
					</ul>
				</section>

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
										<div className="flex size-11 items-center justify-center rounded-xl bg-white">
											<MessageIcon className="text-primary size-7" />
										</div>

										<div>
											<p className="text-sm font-medium">Gaenr</p>
											<p className="text-xs text-nowrap">Payment received</p>
										</div>

										<p className="text-primary-dark opacity60 self-start text-xs">
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
