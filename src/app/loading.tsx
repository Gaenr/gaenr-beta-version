export default function Loading() {
	return (
		<div className="flex h-[calc(100dvh-var(--navbar-height))] flex-col items-center gap-y-4 py-16">
			<div className="loader" />
		</div>
	)
}
