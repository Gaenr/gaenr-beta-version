import { Metadata } from 'next'

import AssignTaskForm from '@/components/features/assign-task-form'
import { Logo } from '@/components/ui/logo'

export const metadata: Metadata = {
	title: 'Assign Task',
	description: ''
}

export default function Page() {
	return (
		<main className="py-12 md:gap-y-16 md:py-16">
			<section className="mx-auto flex w-full max-w-2xl flex-col gap-y-10 px-6">
				<article className="flex flex-col items-center gap-y-2 px-6">
					<Logo className="mx-auto mb-3 size-11" />
					<h2 className="text-primary-dark text-2xl font-semibold sm:text-xl">
						Assign Task
					</h2>
					<p className="text-center">
						Please share accurate information so we can deliver exactly what you
						expect.
					</p>
				</article>

				<AssignTaskForm />
			</section>
		</main>
	)
}
