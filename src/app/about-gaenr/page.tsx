import { Metadata } from 'next'

import {
	CommunityIcon,
	EmpowermentIcon,
	HomeIcon,
	PersonalSupportIcon,
	TakaIcon,
	ZeroPercentIcon
} from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'
import LogoCard from '@/components/ui/logo-card'

export const metadata: Metadata = {
	title: 'About Gaenr'
}

export default function Page() {
	return (
		<main className="flex flex-col gap-y-12 pt-0 pb-12 md:gap-y-16 md:pb-16">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-10 sm:py-12">
				<Breadcrumbs color="white">
					<BreadcrumbItem
						href="/"
						startContent={
							<HomeIcon className="mr-1 size-4.5 -translate-y-px" />
						}>
						Home
					</BreadcrumbItem>
					<BreadcrumbItem href="/about-gaenr">About</BreadcrumbItem>
				</Breadcrumbs>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-medium text-white">Gaenr</h1>
					<p className="hidden text-center text-white sm:block">
						Gaenr is Bangladesh’s dedicated marketplace for verified experts
						connecting talent students with clients.
					</p>
				</article>
			</section>

			<section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-y-12 px-6 md:max-w-5xl md:flex-row md:gap-x-14">
				<LogoCard />
				<article className="space-y-5">
					<h1 className="text-center text-2xl font-semibold md:text-start">
						<span className="text-blue-950">About</span>&nbsp;
						<span className="text-primary-dark">Gaenr</span>
					</h1>
					<p>
						Gaenr is Bangladesh’s dedicated marketplace for verified experts,
						built for the local economy. We connect a diverse talent pool
						students, independent professionals, and entrepreneurs with clients
						seeking high quality work at competitive local rates. Unlike global
						platforms weighed down by high commissions and complex payments,
						Gaenr prioritizes simplicity and local relevance, handling
						logistics.
					</p>
				</article>
			</section>

			<ul className="mx-auto grid w-full max-w-5xl grid-cols-1 place-items-center gap-7 px-6 md:grid-cols-3">
				<li className="flex max-w-xs flex-col gap-y-10 rounded-3xl bg-gray-100 bg-linear-to-b p-7">
					<h2 className="space-y-4 text-xl font-semibold text-blue-950">
						<p>Mission</p>
						<span className="block h-0.75 w-8 rounded-full bg-blue-950" />
					</h2>
					<p className="text-sm text-black">
						Connecting experts and outsourcers through a trusted, intelligent
						platform for real impact.
					</p>
				</li>
				<li className="flex max-w-xs flex-col gap-y-10 rounded-3xl bg-gray-100 bg-linear-to-b p-7">
					<h2 className="space-y-4 text-xl font-semibold text-blue-950">
						<p>Goal</p>
						<span className="block h-0.75 w-8 rounded-full bg-blue-950" />
					</h2>
					<p className="text-sm text-black">
						To build a trusted, community driven freelancing ecosystem where
						skills meet opportunity.
					</p>
				</li>
				<li className="flex max-w-xs flex-col gap-y-10 rounded-3xl bg-gray-100 bg-linear-to-b p-7">
					<h2 className="space-y-4 text-xl font-semibold text-blue-950">
						<p>Dream</p>
						<span className="block h-0.75 w-8 rounded-full bg-blue-950" />
					</h2>
					<p className="text-sm text-black">
						We’re building an effortless platform that connects experts and
						outsourcers without barriers.
					</p>
				</li>
			</ul>

			<div className="mx-auto w-full max-w-5xl px-6">
				<section className="from-primary-light to-primary relative flex flex-col gap-y-9 overflow-hidden rounded-3xl bg-linear-to-br p-9 sm:gap-y-12">
					<h3 className="text-center text-2xl font-semibold text-white">
						Gaenr's Uniqueness
					</h3>

					<ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-y-14 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
						<li className="flex flex-col items-center gap-y-7">
							<div className="flex size-14 rotate-45 items-center justify-center rounded-2xl bg-white shadow-md">
								<TakaIcon className="text-primary size-10 -rotate-45" />
							</div>
							<p className="max-w-40 text-center font-medium text-white">
								Local Currency Payments
							</p>
						</li>
						<li className="flex flex-col items-center gap-y-7">
							<div className="flex size-14 rotate-45 items-center justify-center rounded-2xl bg-white">
								<ZeroPercentIcon className="text-primary size-8 -rotate-45" />
							</div>
							<p className="max-w-40 text-center font-medium text-white">
								Zero Platform Fees
							</p>
						</li>
						<li className="flex flex-col items-center gap-y-7">
							<div className="flex size-14 rotate-45 items-center justify-center rounded-2xl bg-white">
								<PersonalSupportIcon className="text-primary size-8 -rotate-45" />
							</div>
							<p className="max-w-40 text-center font-medium text-white">
								Dedicated Personal Support
							</p>
						</li>
						<li className="flex flex-col items-center gap-y-7">
							<div className="flex size-14 rotate-45 items-center justify-center rounded-2xl bg-white">
								<EmpowermentIcon className="text-primary size-9 -rotate-45" />
							</div>
							<p className="max-w-40 text-center font-medium text-white">
								Student Focused Empowerment
							</p>
						</li>
						<li className="flex flex-col items-center gap-y-7">
							<div className="flex size-14 rotate-45 items-center justify-center rounded-2xl bg-white">
								<CommunityIcon className="text-primary size-8 -rotate-45" />
							</div>
							<p className="max-w-40 text-center font-medium text-white">
								Community Over Competition
							</p>
						</li>
					</ul>

					<div className="absolute top-0 left-0 hidden size-32 -translate-1/3 rounded-full bg-blue-200/10 shadow-md saturate-150 sm:block" />
				</section>
			</div>
		</main>
	)
}
