import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { HomeIcon, StarFillIcon } from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
	title: 'Meet Our Experts'
}

export default function Page() {
	return (
		<main className="py-12">
			<Breadcrumbs classNames={{ base: 'max-w-8xl mx-auto w-full px-6' }}>
				<BreadcrumbItem
					href="/"
					startContent={<HomeIcon className="mr-1 size-4.5 -translate-y-px" />}>
					Home
				</BreadcrumbItem>
				<BreadcrumbItem href="/experts">Experts</BreadcrumbItem>
			</Breadcrumbs>

			<section className="max-w-8xl mx-auto my-9 w-full space-y-8 px-6">
				<h2 className="space-y-4 text-xl font-semibold text-blue-950">
					<p>Our experts</p>
					<span className="bg-primary-light block h-0.75 w-8 rounded-full" />
				</h2>

				<ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-9 self-stretch min-[480px]:gap-y-12 min-[700px]:gap-y-16">
					{[
						'Lauren Patel',
						'Kristy Guzman',
						'Cortez Gonzales',
						'Juan Snyder',
						'Marylou Little',
						'Randy Howard',
						'Sherri Howell',
						'Sherri Howell',
						'Christina Cantu'
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
			</section>
		</main>
	)
}
