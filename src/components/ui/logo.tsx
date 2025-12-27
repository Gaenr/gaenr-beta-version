export default function Logo({
	size = 'md',
	onlyLogo = true
}: {
	size?: 'sm' | 'md' | 'lg'
	onlyLogo?: boolean
}) {
	const sizeClasses =
		size === 'sm' ? 'size-10' : size === 'md' ? 'size-14' : 'size-20'

	return (
		<div className="flex items-center gap-4.5">
			{!onlyLogo && (
				<p className="text-[33px] font-semibold text-zinc-800">Gaenr</p>
			)}
		</div>
	)
}
