import { Metadata } from 'next'

import TestimonialsSection from '@/components/features/testimonials-section'
import { HomeIcon } from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
	title: 'Testimonials'
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
					<BreadcrumbItem href="/testimonials">Testimonials</BreadcrumbItem>
				</Breadcrumbs>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-medium text-white">Testimonials</h1>
					<p className="hidden text-center text-white sm:block">
						Discover the stories of our satisfied customers and how our services
						have transformed their lives.
					</p>
				</article>
			</section>

			<TestimonialsSection />
		</main>
	)
}
