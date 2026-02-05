export const FeedbackIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="0 0 48 48"
			{...props}>
			<g>
				<linearGradient
					id="feedback-a"
					x1="20.01"
					x2="41.028"
					y1="17.01"
					y2="38.028"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#4793eb"></stop>
					<stop offset="1" stopColor="#2367ec"></stop>
				</linearGradient>
				<linearGradient
					id="feedback-b"
					x1="6.538"
					x2="34.332"
					y1="3.538"
					y2="31.332"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#6fc6fc"></stop>
					<stop offset="1" stopColor="#50a7f6"></stop>
				</linearGradient>
				<linearGradient
					id="feedback-c"
					x1="14.5"
					x2="14.5"
					y1="16.236"
					y2="25.871"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#4793eb"></stop>
					<stop offset=".297" stopColor="#438eeb"></stop>
					<stop offset=".605" stopColor="#3982eb"></stop>
					<stop offset=".918" stopColor="#286deb"></stop>
					<stop offset="1" stopColor="#2367ec"></stop>
				</linearGradient>
				<linearGradient
					id="feedback-d"
					x1="24"
					x2="24"
					y1="9.204"
					y2="26.12"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset=".325" stopColor="#fafbfb"></stop>
					<stop offset=".662" stopColor="#eef0f1"></stop>
					<stop offset="1" stopColor="#dadfe0"></stop>
				</linearGradient>
				<path
					fill="url(#feedback-a)"
					d="M33.586 43.412 28.174 38H14c-2.757 0-5-2.243-5-5V15c0-2.757 2.243-5 5-5h26c2.757 0 5 2.243 5 5v18c0 2.757-2.243 5-5 5h-3v3.998a1.994 1.994 0 0 1-2.002 2.001c-.52 0-1.028-.204-1.412-.587z"
					opacity="1"
					data-original="url(#feedback-a)"></path>
				<path
					fill="url(#feedback-b)"
					d="M13.002 37.999A1.994 1.994 0 0 1 11 35.998V32H8c-2.757 0-5-2.243-5-5V9c0-2.757 2.243-5 5-5h26c2.757 0 5 2.243 5 5v18c0 2.757-2.243 5-5 5H19.826l-5.412 5.412a1.998 1.998 0 0 1-1.412.587z"
					opacity="1"
					data-original="url(#feedback-b)"></path>
				<path
					fill="url(#feedback-c)"
					d="M18 26h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5z"
					opacity="1"
					data-original="url(#feedback-c)"></path>
				<path
					fill="url(#feedback-d)"
					d="m17.672 14.792 3.189-4.783A2.265 2.265 0 0 1 22.747 9a1.852 1.852 0 0 1 1.827 2.157L23.8 15.8h4.933c1.4 0 2.465 1.256 2.236 2.637l-.94 5.667A2.266 2.266 0 0 1 27.793 26H17v-8.989a4 4 0 0 1 .672-2.219z"
					opacity="1"
					data-original="url(#feedback-d)"></path>
			</g>
		</svg>
	)
}
