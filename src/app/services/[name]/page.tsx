import {
	CloseIcon,
	HomeIcon,
	ShortArrowIcon,
	StarFillIcon,
	TakaIcon
} from '@/components/icons'
import { CheckIcon } from '@/components/icons/check'
import MiniLink from '@/components/ui/mini-link'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<main>
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/services-thumbnail/big-2.png')] bg-cover bg-center bg-no-repeat py-12">
				<nav className="flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap">
					<HomeIcon className="size-4.5 -translate-y-px text-white" />
					<Link href="/" className="font-medium text-white">
						Home
					</Link>
					<ShortArrowIcon className="size-5 text-white" />
					<Link href="#" className="font-medium text-white">
						Services
					</Link>
					<ShortArrowIcon className="size-5 text-white" />
					<Link
						href="#"
						className="w-full grow text-center font-medium text-white sm:w-max sm:grow-0">
						Graphics Design
					</Link>
				</nav>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Graphics Design</h1>
					<p className="hidden text-center text-white sm:block">
						Explore our top-notch graphics design services, where creativity
						meets precision. Our team of skilled designers is dedicated to
						bringing your vision to life.
					</p>
				</article>
			</section>

			<section className="grid grid-cols-3 lg:grid-cols-5">
				{Array.from({ length: 6 }).map((_, i) => (
					<div
						className="group relative aspect-video w-full overflow-hidden lg:last:hidden"
						key={i}>
						<Image
							src={`/services-examples/${i + 1}.jpg`}
							alt={`Service example ${i + 1}`}
							className="object-cover duration-300 ease-in group-hover:scale-110"
							fill
						/>
						<div className="absolute inset-0 bg-black/30 duration-300 ease-in group-hover:bg-black/0" />
					</div>
				))}
			</section>

			<section className="my-12 space-y-8 px-6 lg:my-16">
				<h2 className="col-span-full text-center text-2xl font-semibold text-blue-950">
					About our service
					<span className="bg-primary mx-auto mt-3.5 block h-0.75 w-12 rounded-full" />
				</h2>

				<p className="mx-auto w-full max-w-4xl text-gray-500 min-[480px]:text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus unde recusandae ducimus quibusdam veniam dolor
					accusantium sint sequi velit nam rem sunt atque illo iusto, modi quam
					alias odio quasi.
				</p>
			</section>

			<section className="mx-auto my-12 grid w-full max-w-lg grid-cols-1 gap-y-9 px-6 sm:grid-cols-2 sm:gap-y-12 md:max-w-5xl md:grid-cols-4 md:gap-x-3 lg:my-16">
				<h2 className="col-span-full text-center text-2xl font-semibold text-blue-950">
					Our experts
				</h2>

				{Array.from({ length: 4 }).map((_, i) => (
					<div className="flex flex-col items-center" key={i}>
						<Link
							href="#"
							className="relative flex size-22 items-center justify-center overflow-hidden rounded-full bg-linear-to-b from-blue-200 to-blue-50">
							<Image
								src={`/avatars/${i + 1}.png`}
								alt={`Avatar ${i + 1}`}
								width={64}
								height={64}
								className="rounded-full"
							/>
						</Link>
						<p className="mt-4 mb-2 text-lg font-medium">Lauren Patel</p>

						<div className="flex items-center gap-x-4">
							<div className="flex items-center gap-x-1.5 font-medium">
								<StarFillIcon className="text-primary -translate-y-px" />
								4.5
							</div>
							<div className="text-sm text-gray-500">(2 Review)</div>
						</div>
					</div>
				))}

				<div className="col-span-full flex justify-center">
					<MiniLink href="/experts">View all</MiniLink>
				</div>
			</section>

			<section className="mx-auto my-12 grid w-full max-w-5xl grid-cols-1 gap-y-9 px-6 md:grid-cols-3 md:gap-x-3 md:gap-y-12 lg:my-16">
				<h2 className="col-span-full text-center text-2xl font-semibold text-blue-950">
					Service pricing
				</h2>

				<div className="via-primary from-primary relative mx-auto max-w-xs rounded-3xl border border-slate-200 bg-linear-to-b to-blue-500 p-7 lg:order-2">
					<div className="flex items-center gap-x-3 text-3xl">
						<TakaIcon className="-mx-3 text-4xl text-white" />
						<p className="font-semibold text-white">3,000</p>
					</div>

					<div className="mt-5 mb-7 flex items-center gap-x-2">
						<div className="h-0.75 w-7 rounded-full bg-white" />
						<div className="h-0.75 w-7 rounded-full bg-gray-200" />
					</div>

					<p className="text-xl font-medium text-white">Professional</p>
					<p className="mt-2 text-sm font-medium text-white">
						Ideal for individuals and small teams starting out with our service.
					</p>

					<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-white font-medium shadow-lg duration-200 ease-in hover:bg-blue-100">
						Order now
					</button>

					<ul className="space-y-4">
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

					<p className="absolute top-3.5 right-3.5 rounded-full bg-blue-400/40 px-4 py-1.5 text-xs font-medium text-white shadow-md shadow-black/7">
						Most Popular
					</p>
				</div>

				<div className="mx-auto max-w-xs rounded-3xl border border-slate-200 bg-white p-7 lg:order-1 lg:max-w-full">
					<div className="flex items-center gap-x-3 text-3xl">
						<TakaIcon className="text-primary -mx-3 text-4xl" />
						<p className="text-primary font-semibold">1,200</p>
					</div>

					<div className="mt-5 mb-7 flex items-center gap-x-2">
						<div className="bg-primary h-0.75 w-7 rounded-full" />
						<div className="h-0.75 w-7 rounded-full bg-gray-200" />
					</div>

					<p className="text-xl font-medium">Basic</p>
					<p className="mt-2 text-sm font-medium text-gray-600">
						Ideal for individuals and small teams starting out with our service.
					</p>

					<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-blue-100 font-medium duration-200 ease-in hover:bg-blue-200">
						Order now
					</button>

					<ul className="space-y-4">
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
				</div>

				<div className="mx-auto max-w-xs rounded-3xl border border-slate-200 bg-white p-7 lg:order-3 lg:max-w-full">
					<div className="flex items-center gap-x-3 text-3xl">
						<TakaIcon className="text-primary -mx-3 text-4xl" />
						<p className="text-primary font-semibold">5,600</p>
					</div>

					<div className="mt-5 mb-7 flex items-center gap-x-2">
						<div className="bg-primary h-0.75 w-7 rounded-full" />
						<div className="h-0.75 w-7 rounded-full bg-gray-200" />
					</div>

					<p className="text-xl font-medium">Enterprise</p>
					<p className="mt-2 text-sm font-medium text-gray-600">
						Ideal for individuals and small teams starting out with our service.
					</p>

					<button className="text-primary mt-5 mb-6 h-11 w-full rounded-full bg-blue-100 font-medium duration-200 ease-in hover:bg-blue-200">
						Order now
					</button>

					<ul className="space-y-4">
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
				</div>
			</section>
		</main>
	)
}
