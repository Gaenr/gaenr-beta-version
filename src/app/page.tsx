import PaymentBox from '@/components/features/payment-box'
import ServiceBox from '@/components/features/service-box'
import { BadgeCheckIcon } from '@/components/icons'
import { BrandArrow } from '@/components/ui/brand-arrow'
import Button from '@/components/ui/button'
import Header from '@/components/ui/header'
import Iphone from '@/components/ui/iphone'
import { IphoneMockup } from '@/components/ui/iphone-mockup'
import MiniLink from '@/components/ui/mini-link'
import Testimonials from '@/components/ui/testimonials'
import { CLIENT_BENEFITS } from '@/data/clients-benefit'
import { PAYMENT_PROCESS_STEPS } from '@/data/payment-process-steps'
import { SERVICE_NAMES } from '@/utils/constants'
import Image from 'next/image'

export default function Page() {
	return (
		<div>
			<Header />

			<main className="flex flex-col gap-y-24 py-12 lg:py-24">
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700 sm:items-start sm:gap-y-2 sm:text-3xl">
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

					<div className="mx-auto aspect-4/3 w-full max-w-sm">
						<BrandArrow className="h-auto w-full" />
					</div>
				</section>

				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					<div>content left</div>

					<article className="lg:gapy-y-12 flex flex-col items-start gap-y-8">
						<h2 className="flex flex-col items-center self-stretch text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700 sm:items-start sm:gap-y-2 sm:text-3xl">
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
					<h2 className="flex flex-col items-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700 sm:flex-row sm:gap-x-2.5 sm:text-3xl">
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

						<div className="space-y-10">
							<p className="text-primary-dark text-lg font-semibold">
								For clients
							</p>

							<ul className="grid grid-cols-1 items-start gap-y-7 px-4 md:grid-cols-2 md:gap-10 lg:grid-cols-1 lg:gap-y-7 2xl:grid-cols-2 2xl:gap-10">
								{CLIENT_BENEFITS.map(({ title, description }) => (
									<li
										className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-0.5"
										key={title}>
										<div className="bg-primary-light row-start-1 row-end-3 flex size-7 shrink-0 flex-nowrap items-center justify-center rounded-full ring-4 ring-blue-200 duration-200 group-hover:ring-0">
											<BadgeCheckIcon className="size-4 text-white" />
										</div>
										<p className="font-medium">{title}</p>
										<p className="text-sm font-medium text-gray-500">
											{description}
										</p>
									</li>
								))}
							</ul>
						</div>
					</section>
				</div>

				<section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-y-16 px-6 lg:max-w-7xl">
					<div className="col-span-full self-stretch">
						<h2 className="flex flex-col items-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700 sm:flex-row sm:gap-x-2.5 sm:text-3xl">
							<p className="text-primary-dark">Fast simple secure</p>
							<p>payment process</p>
						</h2>
					</div>

					<ul className="grid grid-cols-1 gap-y-8 self-stretch sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
						{PAYMENT_PROCESS_STEPS.map(({ title, description }, id) => (
							<PaymentBox
								id={id}
								title={title}
								description={description}
								key={title}
							/>
						))}
					</ul>

					<MiniLink href="/payment-process">Learn more</MiniLink>
				</section>

				<div className="-mb-24 flex h-120 w-full items-center justify-center bg-blue-100/30 px-6 sm:mb-0 md:h-140">
					<Testimonials />
				</div>

				<div className="sm:px-6">
					<section className="bg-primary relative mx-auto flex w-full max-w-6xl flex-col gap-y-8 overflow-hidden p-10 sm:gap-y-12 sm:rounded-3xl">
						<article className="relative z-10 w-full sm:space-y-4">
							<h3 className="flex flex-col items-center justify-center text-[clamp(1rem,7vw,1.8rem)] font-semibold text-white sm:gap-x-2.5 sm:text-3xl lg:flex-row">
								<p>Got skills?</p>
								<p className="text-center lg:text-left">
									Let’s turn them into opportunity
								</p>
							</h3>
							<p className="mx-auto hidden max-w-4xl text-center text-sky-200 sm:block lg:text-lg">
								Join Gaenr to access real demand, fair pay, and support that
								understands Bangladesh’s market. No more undercutting, just fair
								rates, fast payments, and continuous work
							</p>
						</article>

						<div className="relative z-10 mx-auto grid w-full grid-cols-1 place-items-center gap-y-14 md:grid-cols-2">
							<div className="flex flex-col gap-y-8 md:-mt-10 md:gap-y-10">
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
								<IphoneMockup className="w-full" />

								<Iphone />
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
