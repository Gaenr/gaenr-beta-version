import FeedbackForm from '@/components/features/feedback-form'
import { PlayIcon } from '@/components/icons'
import { FeedbackIcon } from '@/components/icons/feedback'
import Breadcrumbs from '@/components/ui/breadcrumbs'

export default function Page() {
	return (
		<main className="flex flex-col items-center gap-y-12 pb-12 lg:pb-24">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-6 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-12">
				<Breadcrumbs href="feedback" title="Feedback" />

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6">
					<h1 className="text-3xl font-semibold text-white">
						Your voice shapes Gaenr
					</h1>
					<p className="hidden text-center text-white sm:block">
						If you’ve noticed something we could improve or have an idea to make
						the platform better, share it here. We read every message.
					</p>
				</article>
			</section>

			<section className="flex flex-col items-center justify-center gap-x-12 gap-y-6 px-6 sm:flex-row">
				<FeedbackIcon className="w-full max-w-xs shrink-0 sm:size-60" />

				<ul className="flex flex-col gap-y-3">
					<h2 className="text-primary-dark mb-2 text-center text-2xl font-semibold sm:text-start sm:text-xl">
						Share your
					</h2>
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
			</section>

			<section className="flex w-full max-w-2xl flex-col items-center gap-y-10 px-6">
				<div className="flex flex-col items-center gap-y-3 px-6">
					<h2 className="text-primary-dark text-center text-2xl font-semibold sm:text-start sm:text-xl">
						We're listening
					</h2>
					<p className="hidden text-center sm:block">
						Your insight helps us build a platform that truly works for you.
					</p>
				</div>

				<FeedbackForm />
			</section>
		</main>
	)
}
