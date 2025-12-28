export default function Button({
	children,
	color = 'default',
	sizes = 'md',
	radius = 'full',
	startContent = null,
	endContent = null,
	fullWidth = false,
	isDisabled = false
}: {
	children: React.ReactNode
	color?: 'default' | 'primary'
	sizes?: 'sm' | 'md' | 'lg'
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	startContent?: React.ReactNode
	endContent?: React.ReactNode
	fullWidth?: boolean
	isDisabled?: boolean
}) {
	const colorClasses = {
		default: 'bg-white text-zinc-700 hover:text-primary',
		primary: 'from-brand-600 to-brand-700 bg-linear-to-br text-white'
	}
	const sizesClasses = {
		sm: 'h-8 text-sm px-3',
		md: 'h-10 text-sm px-4',
		lg: 'h-12 text-base px-6'
	}
	const radiusClasses = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full'
	}

	return (
		<button
			className={`flex items-center justify-center gap-x-2 font-medium tracking-wide duration-200 ${colorClasses[color]} ${sizesClasses[sizes]} ${radiusClasses[radius]} ${fullWidth ? 'w-full' : 'w-max'}`}
			disabled={isDisabled}>
			{startContent}
			{children}
			{endContent}
		</button>
	)
}
