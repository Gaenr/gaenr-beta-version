export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			fill="currentColor"
			width="1em"
			viewBox="0 0 9.5 7.5"
			height="1em"
			{...props}>
			<defs>
				<style>{`.quote-icon-color {fill: url(#linear-gradient);}`}</style>
				<linearGradient
					id="linear-gradient"
					x1="4.75"
					y1="7.5"
					x2="4.75"
					y2="0"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#8ec5ff" stopOpacity=".7" />
					<stop offset=".14" stopColor="#90c6ff" stopOpacity=".68" />
					<stop offset=".29" stopColor="#98caff" stopOpacity=".63" />
					<stop offset=".45" stopColor="#a5d1ff" stopOpacity=".55" />
					<stop offset=".6" stopColor="#b8daff" stopOpacity=".44" />
					<stop offset=".76" stopColor="#cfe6ff" stopOpacity=".29" />
					<stop offset=".91" stopColor="#ecf5ff" stopOpacity=".12" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</linearGradient>
			</defs>
			<path
				className="quote-icon-color"
				d="M7.28,7.5c-1,.03-2.09-.72-2.26-2.3v-.16s-.01,0-.01,0c-.1-1.66,1.06-3.93,3.59-5.02.12-.05.25,0,.32.1l.56.96c.07.12.03.27-.09.34,0,0,0,0,0,0-.86.48-1.52,1.24-1.92,2.15.6.11,1.02.35,1.31.68.33.38.45.85.45,1.26,0,1.11-.85,2-1.93,1.98M2.28,7.5c-1,.03-2.09-.72-2.26-2.3v-.16s-.01,0-.01,0C-.09,3.38,1.07,1.11,3.6.02c.12-.05.25,0,.32.1l.55.96c.07.12.03.27-.09.34,0,0,0,0,0,0-.86.48-1.52,1.24-1.92,2.15.6.11,1.02.35,1.31.68.33.38.45.85.45,1.26,0,1.11-.85,2-1.93,1.98"
			/>
		</svg>
	)
}
