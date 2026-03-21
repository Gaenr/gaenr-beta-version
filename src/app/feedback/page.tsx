import { Metadata } from 'next'
import Image from 'next/image'

import FeedbackForm from '@/components/features/feedback-form'
import { HomeIcon, PlayIcon } from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
	title: 'Share Feedback'
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
					<BreadcrumbItem href="/feedback">Feedback</BreadcrumbItem>
				</Breadcrumbs>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-medium text-white">Feedback</h1>
					<p className="hidden text-center text-white sm:block">
						We’re always looking to improve. Your feedback helps us make Gaenr
						better for everyone.
					</p>
				</article>
			</section>

			<section className="mx-auto flex flex-col items-center justify-center gap-x-10 gap-y-6 px-6 sm:flex-row">
				<Image
					src="/feedback.png"
					alt="Feedback icon"
					width={512}
					height={512}
					className="w-full max-w-xs shrink-0 sm:size-60"
				/>

				<div className="space-y-4">
					<h2 className="text-primary-dark text-center text-2xl font-semibold sm:text-start sm:text-xl">
						Share your
					</h2>
					<ul className="flex flex-col gap-y-3">
						<li className="flex items-start gap-x-3">
							<PlayIcon className="size-3 translate-y-1.5" />
							<p>Ideas that can improve your experience</p>
						</li>
						<li className="flex items-start gap-x-3">
							<PlayIcon className="size-3 translate-y-1.5" />
							<p>Bugs or issues you’ve noticed</p>
						</li>
						<li className="flex items-start gap-x-3">
							<PlayIcon className="size-3 translate-y-1.5" />
							<p>Features you think we should add</p>
						</li>
						<li className="flex items-start gap-x-3">
							<PlayIcon className="size-3 translate-y-1.5" />
							<p>Thoughts on what’s working and what’s not</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="mx-auto flex w-full max-w-2xl flex-col gap-y-10 px-6">
				<article className="flex flex-col items-center gap-y-2 px-6">
					<h2 className="text-primary-dark text-2xl font-semibold sm:text-xl">
						We're listening
					</h2>
					<p className="text-center">
						Your insight helps us build a platform that truly works for you
					</p>
				</article>

				<FeedbackForm />
			</section>
		</main>
	)
}
