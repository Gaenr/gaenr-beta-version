import Link from 'next/link'

import FeedbackForm from '@/components/features/feedback-form'
import { HomeIcon, ShortArrowIcon, TriangleFillIcon } from '@/components/icons'
import { FeedbackIcon } from '@/components/icons/feedback'

export default function Page() {
	return (
		<main className="pt-0 pb-12">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-6 bg-[url('/xyz.png')] bg-cover bg-center bg-no-repeat py-12">
				<nav className="flex items-center justify-center gap-x-2">
					<HomeIcon className="size-4.5 -translate-y-px text-white" />
					<Link href="/" className="font-medium text-white">
						Home
					</Link>
					<ShortArrowIcon className="size-5 text-white" />
					<Link href="/feedback" className="font-medium text-white">
						Feedback
					</Link>
				</nav>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6">
					<h1 className="text-center text-3xl font-semibold text-white">
						Your voice shapes Gaenr
					</h1>
					<p className="hidden text-center text-white sm:block">
						If you’ve noticed something we could improve or have an idea to make
						the platform better, share it here. We read every message.
					</p>
				</article>
			</section>

			<section className="mx-auto mt-10 mb-16 flex w-full max-w-4xl flex-col items-center justify-center gap-x-12 gap-y-6 px-6 sm:flex-row">
				<FeedbackIcon className="size-70 shrink-0 sm:size-60" />

				<ul className="flex flex-col gap-y-3">
					<h2 className="text-primary-dark mb-2 text-center text-2xl font-semibold sm:text-start sm:text-xl">
						Share your
					</h2>
					<li className="flex items-start gap-x-3">
						<TriangleFillIcon className="size-3 translate-y-1.5 rotate-90" />
						<p>Ideas that can improve your experience</p>
					</li>
					<li className="flex items-start gap-x-3">
						<TriangleFillIcon className="size-3 translate-y-1.5 rotate-90" />
						<p>Bugs or issues you’ve noticed</p>
					</li>
					<li className="flex items-start gap-x-3">
						<TriangleFillIcon className="size-3 translate-y-1.5 rotate-90" />
						<p>Features you think we should add</p>
					</li>
					<li className="flex items-start gap-x-3">
						<TriangleFillIcon className="size-3 translate-y-1.5 rotate-90" />
						<p>Thoughts on what’s working and what’s not</p>
					</li>
				</ul>
			</section>

			<section className="mx-auto flex flex-col items-center gap-y-10">
				<div className="flex w-full max-w-lg flex-col items-center gap-y-3 px-6">
					<h2 className="text-primary-dark text-center text-2xl font-semibold sm:text-start sm:text-xl">
						We're listening
					</h2>
					<p className="hidden text-center sm:block">
						Tell us what you think. Your insight helps us build a platform that
						truly works for you.
					</p>
				</div>

				<FeedbackForm />
			</section>
		</main>
	)
}
