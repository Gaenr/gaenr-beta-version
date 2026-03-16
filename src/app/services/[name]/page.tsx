import Image from 'next/image'
import Link from 'next/link'

import { CloseIcon, HomeIcon, StarFillIcon, TakaIcon } from '@/components/icons'
import { CheckIcon } from '@/components/icons/check'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'
import MiniLink from '@/components/ui/mini-link'

export default function Page() {
	return (
		<main>
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-10 sm:py-12">
				<Breadcrumbs color="white">
					<BreadcrumbItem
						href="/"
						startContent={<HomeIcon className="size-4.5 -translate-y-px" />}>
						Home
					</BreadcrumbItem>
					<BreadcrumbItem href="/services">Services</BreadcrumbItem>
					<BreadcrumbItem href="/services/graphics-design">
						Graphics Design
					</BreadcrumbItem>
				</Breadcrumbs>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-medium text-white">Graphics Design</h1>
					<p className="hidden text-center text-white sm:block">
						Explore our top-notch graphics design services, where creativity
						meets precision. Our team of skilled designers is dedicated to
						bringing your vision to life.
					</p>
				</article>
			</section>

			<section className="space-y-12">
				<ul className="grid grid-cols-3 lg:grid-cols-5">
					{Array.from({ length: 6 }).map((_, i) => (
						<li
							className="group relative aspect-3/2 w-full overflow-hidden lg:last:hidden"
							key={i}>
							<Image
								src={`/portfolios/${i + 1}.jpg`}
								alt=""
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover duration-300 ease-in group-hover:scale-105"
								fill
							/>
							<div className="absolute inset-0 bg-black/30 duration-300 ease-in group-hover:bg-black/0" />
						</li>
					))}
				</ul>

				<article className="flex flex-col items-center space-y-8 px-6">
					<h2 className="space-y-4 text-2xl font-semibold text-blue-950">
						<p>About our service</p>
						<span className="bg-primary-light mx-auto block h-0.75 w-8 rounded-full" />
					</h2>

					<p className="w-full max-w-4xl text-gray-500 sm:text-center">
						Our graphic design service provides creative solutions for your
						visual communication needs. From eye catching logos to marketing
						materials and social media graphics, our skilled designers help
						bring your vision to life.
					</p>
				</article>
			</section>

			<section className="mx-auto my-12 flex w-full max-w-lg flex-col items-center gap-y-9 px-6 sm:gap-y-12 md:max-w-5xl lg:my-16">
				<h2 className="text-2xl font-semibold text-blue-950">
					<p>Our experts</p>
				</h2>

				<ul className="grid grid-cols-1 gap-y-9 self-stretch sm:grid-cols-2 sm:gap-y-12 md:grid-cols-4 md:gap-x-3">
					{[
						'Lauren Patel',
						'Kristy Guzman',
						'Cortez Gonzales',
						'Juan Snyder'
					].map((name, i) => (
						<li className="flex flex-col items-center" key={i}>
							<Link
								href="/experts/VE2602001"
								className="relative flex size-22 items-center justify-center overflow-hidden rounded-full bg-linear-to-b from-blue-200 to-blue-50">
								<Image
									src={`/avatars/${i + 1}.png`}
									alt=""
									width={64}
									height={64}
									className="rounded-full"
								/>
							</Link>
							<p className="mt-3 mb-2 text-lg font-medium">{name}</p>

							<div className="flex items-center gap-x-1.5">
								<StarFillIcon className="text-primary -translate-y-px" />
								<p className="font-medium">{i * 0.5 + 3.25}</p>
								<p className="ml-3 text-sm font-medium text-gray-500">
									({(i + 1) * 2} Review)
								</p>
							</div>
						</li>
					))}
				</ul>

				<MiniLink href="/experts">View all</MiniLink>
			</section>

			<section className="mx-auto my-12 w-full max-w-5xl space-y-8 px-6 lg:my-16 lg:space-y-10">
				<h2 className="text-center text-2xl font-semibold text-blue-950">
					<p>Service pricing</p>
				</h2>

				<ul className="grid grid-cols-1 place-items-center gap-x-4 gap-y-9 lg:grid-cols-3 lg:place-items-stretch">
					<li className="from-primary via-primary relative mx-auto max-w-sm rounded-3xl border border-gray-200 bg-linear-to-b to-blue-500 p-7 lg:order-2">
						<div className="flex items-center gap-x-3 text-3xl">
							<TakaIcon className="-mx-3 -translate-y-0.5 text-4xl text-white" />
							<p className="font-semibold text-white">3,000</p>
						</div>

						<div className="mt-5 mb-7 flex items-center gap-x-2">
							<div className="h-0.75 w-7 rounded-full bg-white" />
							<div className="h-0.75 w-7 rounded-full bg-gray-200" />
						</div>

						<p className="text-xl font-medium text-white">Professional</p>
						<p className="mt-2 text-sm font-medium text-white">
							Ideal for individuals and small teams starting out with our
							service
						</p>

						<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-white font-medium duration-200 active:scale-90">
							Order now
						</button>

						<ul className="space-y-3">
							<li className="flex items-center gap-x-3 text-white">
								<CheckIcon className="size-5 text-white" />
								Access to basic features
							</li>
							<li className="flex items-center gap-x-3 text-white">
								<CheckIcon className="size-5 text-white" />
								Own analytics platform
							</li>
							<li className="flex items-center gap-x-3 text-white">
								<CheckIcon className="size-5 text-white" />
								Monthly active users
							</li>
							<li className="flex items-center gap-x-3 text-white">
								<CheckIcon className="size-5 text-white" />
								Email support 24-48
							</li>
							<li className="flex items-center gap-x-3 text-blue-200">
								<CloseIcon className="size-5 text-blue-300" />
								Community support
							</li>
						</ul>

						<p className="absolute top-3.5 right-3.5 rounded-full bg-blue-400/50 px-4 py-1.5 text-xs font-medium text-white">
							Most Popular
						</p>
					</li>

					<li className="max-w-sm rounded-3xl border border-gray-200 bg-white p-7 lg:order-1 lg:max-w-full">
						<div className="flex items-center gap-x-3 text-3xl">
							<TakaIcon className="text-primary -mx-3 -translate-y-0.5 text-4xl" />
							<p className="text-primary font-semibold">1,200</p>
						</div>

						<div className="mt-5 mb-7 flex items-center gap-x-2">
							<div className="bg-primary h-0.75 w-7 rounded-full" />
							<div className="h-0.75 w-7 rounded-full bg-gray-200" />
						</div>

						<p className="text-xl font-medium">Basic</p>
						<p className="mt-2 text-sm font-medium text-gray-600">
							Ideal for individuals and small teams starting out with our
							service
						</p>

						<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-blue-100 font-medium duration-200 active:scale-90">
							Order now
						</button>

						<ul className="space-y-3">
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Access to basic features
							</li>
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Own analytics platform
							</li>
							<li className="flex items-center gap-x-3">
								<CloseIcon className="size-4.5 text-gray-400" />
								Monthly active users
							</li>
							<li className="flex items-center gap-x-3">
								<CloseIcon className="size-4.5 text-gray-400" />
								Email support 24-48
							</li>
							<li className="flex items-center gap-x-3">
								<CloseIcon className="size-4.5 text-gray-400" />
								Community support
							</li>
						</ul>
					</li>

					<li className="max-w-sm rounded-3xl border border-gray-200 bg-white p-7 lg:order-3 lg:max-w-full">
						<div className="flex items-center gap-x-3 text-3xl">
							<TakaIcon className="text-primary -mx-3 -translate-y-0.5 text-4xl" />
							<p className="text-primary font-semibold">5,600</p>
						</div>

						<div className="mt-5 mb-7 flex items-center gap-x-2">
							<div className="bg-primary h-0.75 w-7 rounded-full" />
							<div className="h-0.75 w-7 rounded-full bg-gray-200" />
						</div>

						<p className="text-xl font-medium">Enterprise</p>
						<p className="mt-2 text-sm font-medium text-gray-600">
							Ideal for individuals and small teams starting out with our
							service
						</p>

						<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-blue-100 font-medium duration-200 active:scale-90">
							Order now
						</button>

						<ul className="space-y-3">
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Access to basic features
							</li>
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Own analytics platform
							</li>
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Monthly active users
							</li>
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Email support 24-48
							</li>
							<li className="flex items-center gap-x-3">
								<CheckIcon className="text-primary size-5" />
								Community support
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</main>
	)
}
