import ServiceBox from '@/components/features/service-box'
import { ArrowIcon } from '@/components/icons'
import Header from '@/components/ui/header'
import { SERVICE_NAMES } from '@/utils/constants'
import Link from 'next/dist/client/link'

export default function Page() {
	return (
		<div>
			<Header />

			<main className="flex flex-col gap-y-24 py-12 lg:py-24">
				{/* Section 1 */}
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 1 left */}
					<article className="lg:gapy-y-12 flex flex-col gap-y-5 sm:gap-y-8">
						<h2 className="self-stretch text-center text-[clamp(1rem,6vw,2rem)] font-bold text-zinc-700 lg:text-left lg:text-3xl">
							More than a platform
							<span className="hidden md:inline lg:hidden xl:inline">,</span>
							<span className="text-brand-800 block md:ml-2 md:inline lg:mt-2 lg:ml-0 lg:block xl:ml-2 xl:inline">
								A pathway
							</span>
						</h2>
						<div className="space-y-1 sm:space-y-3 lg:space-y-5">
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
					<div>content 2</div>
				</section>

				{/* Section 2 */}
				<section className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 px-6 lg:grid-cols-2 lg:gap-x-24">
					{/* Section 2 left */}
					<div>content 1</div>

					{/* Section 2 right */}
					<article className="lg:gapy-y-12 flex flex-col gap-y-5 sm:gap-y-8">
						<h2 className="flex flex-col gap-y-1 self-stretch text-center text-[clamp(1rem,6vw,2rem)] font-bold text-zinc-700 lg:text-left lg:text-3xl">
							<p>We're still building</p>
							<p className="">
								But you can
								<span className="text-brand-800 ml-2">start today</span>
							</p>
						</h2>
						<div className="space-y-1 sm:space-y-3 lg:space-y-5">
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

						<Link
							href="/feedback"
							className="text-primary flex items-center gap-x-1 self-start border-b-2 border-current leading-0 font-medium duration-200 hover:border-transparent">
							Share your feedback <ArrowIcon className="size-5" />
						</Link>
					</article>
				</section>

				{/* Section 3 */}
				<section className="lg:max-w-8xl mx-auto w-full space-y-12 px-6">
					<h2 className="flex flex-col items-center justify-center text-[clamp(1rem,6vw,2rem)] font-bold text-zinc-700 sm:flex-row sm:gap-x-2.5 lg:text-3xl">
						<p>Services that</p>
						<p className="text-brand-800">move you forward</p>
					</h2>

					<div className="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] justify-center gap-x-5 gap-y-9 min-[500px]:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
						{SERVICE_NAMES.map((serviceName, id) => (
							<ServiceBox id={id} key={serviceName}>
								{serviceName}
							</ServiceBox>
						))}
					</div>
				</section>
			</main>
		</div>
	)
}
