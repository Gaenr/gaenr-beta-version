import { CheckIcon } from '@/components/icons/check'

export default function Page() {
	return (
		<div className="flex h-[calc(100dvh-var(--navbar-height))] flex-col items-center gap-y-4 py-16">
			<CheckIcon className="text-primary-dark size-12" />
			<h1 className="text-primary-dark text-center text-2xl font-semibold">
				Thanks for being with us!
			</h1>
			<p className="max-w-xl text-center">
				Our team will contact you within 24 hours to confirm your order and
				provide you with the next steps. We appreciate your patience.
			</p>
		</div>
	)
}
