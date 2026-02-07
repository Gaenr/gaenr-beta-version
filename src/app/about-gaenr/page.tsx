import {
	CommunityIcon,
	EmpowermentIcon,
	PersonalSupportIcon,
	SimplifiedOnboardingIcon,
	TakaIcon,
	ZeroPercentIcon
} from '@/components/icons'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import LogoCard from '@/components/ui/logo-card'

export default function Page() {
	return (
		<main className="flex flex-col items-center gap-y-12 pb-12 lg:gap-y-24 lg:pb-24">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-12">
				<Breadcrumbs href="about-gaenr" title="About" />

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Title / Header</h1>
					<p className="hidden text-center text-white sm:block">
						Lorem ipsum dolor sit amet consectetur adipisicing elit Quos eanon
						doloremque quod alias voluptatibus voluptates
					</p>
				</article>
			</section>

			<section className="flex w-full max-w-3xl flex-col items-center gap-y-16 px-6 lg:max-w-6xl lg:flex-row lg:gap-x-18">
				<LogoCard />

				<article className="lg:gapy-y-12 flex flex-col items-center gap-y-6 lg:items-start">
					<h2 className="text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700">
						What is Gaenr?
					</h2>
					<div className="space-y-3">
						<p>
							Gaenr is Bangladesh’s dedicated marketplace for verified experts,
							built for the local economy. We connect a diverse talent pool
							students, independent professionals, and entrepreneurs with
							clients seeking high quality work at competitive local rates.
						</p>
						<p>
							Unlike global platforms weighed down by high commissions and
							complex payments, Gaenr prioritizes simplicity and local
							relevance, handling logistics and administration so experts and
							clients can focus solely on great outcomes.
						</p>
					</div>
				</article>
			</section>

			<section className="grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
				<div className="flex flex-col rounded-4xl bg-gray-100 p-6">
					<h3 className="text-2xl font-medium">Our Mission</h3>
					<div className="mt-6 mb-12 h-1 w-14 rounded-full bg-gray-400" />
					<p className="text-sm">
						Connecting experts and outsourcers through a trusted, intelligent
						platform for real impact.
					</p>
				</div>

				<div className="flex flex-col rounded-4xl bg-gray-100 p-6">
					<h3 className="text-2xl font-medium">Our Goal</h3>
					<div className="mt-6 mb-12 h-1 w-14 rounded-full bg-gray-400" />
					<p className="text-sm">
						To build a trusted, community driven freelancing ecosystem where
						skills meet opportunity.
					</p>
				</div>

				<div className="flex flex-col rounded-4xl bg-gray-100 p-6">
					<h3 className="text-2xl font-medium">Our Dream</h3>
					<div className="mt-6 mb-12 h-1 w-14 rounded-full bg-gray-400" />
					<p className="text-sm">
						We’re building an effortless platform that connects experts and
						outsourcers without barriers.
					</p>
				</div>
			</section>

			<section className="flex w-full flex-col items-center gap-y-12 px-6 sm:gap-y-16 lg:max-w-6xl">
				<h2 className="text-[clamp(1rem,7vw,1.8rem)] font-semibold text-gray-700">
					<p>Gaenr's Unique Offering</p>
				</h2>

				<ul className="grid w-full grid-cols-1 justify-center gap-x-5 gap-y-16 sm:grid-cols-2 sm:gap-y-20 md:grid-cols-3">
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<TakaIcon className="size-12 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Local currency payments
						</p>
					</li>
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<ZeroPercentIcon className="size-9 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Zero platform fees
						</p>
					</li>
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<PersonalSupportIcon className="size-9 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Dedicated personal support
						</p>
					</li>
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<EmpowermentIcon className="size-9 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Student focused empowerment
						</p>
					</li>
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<CommunityIcon className="size-9 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Community over competition
						</p>
					</li>
					<li className="flex flex-col items-center gap-y-9">
						<div className="bg-primary flex size-16 rotate-45 items-center justify-center rounded-xl">
							<SimplifiedOnboardingIcon className="size-9 -rotate-45 text-white" />
						</div>
						<p className="text-center text-lg font-medium">
							Simplified onboarding
						</p>
					</li>
				</ul>
			</section>
		</main>
	)
}
