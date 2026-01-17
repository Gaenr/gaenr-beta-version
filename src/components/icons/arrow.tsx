export const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			fill="currentColor"
			width="1em"
			viewBox="0 0 24 24"
			height="1em"
			{...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M17 12H3"
			/>
			<path
				fill="currentColor"
				d="m21.715 11.797l-5.45-3.893a.8.8 0 0 0-1.265.65v6.891a.8.8 0 0 0 1.265.651l5.45-3.893a.25.25 0 0 0 0-.406"
			/>
		</svg>
	)
}
