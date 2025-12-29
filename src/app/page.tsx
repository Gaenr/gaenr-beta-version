import { ArrowIcon } from '@/components/icons'
import Header from '@/components/ui/header'
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
						<h2 className="self-stretch text-center text-[clamp(1rem,6vw,2rem)] font-bold lg:text-left lg:text-3xl">
							More Than a Platform
							<span className="hidden md:inline lg:hidden xl:inline">,</span>
							<span className="text-brand-800 block md:ml-2 md:inline lg:mt-2 lg:ml-0 lg:block xl:ml-2 xl:inline">
								A Pathway
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
			</main>
		</div>
	)
}
