export const TakaIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			fill="currentColor"
			width="1em"
			viewBox="0 0 24 24"
			height="1em"
			{...props}>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2">
				<path d="M15.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
				<path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5M8 11h6" />
			</g>
		</svg>
	)
}
