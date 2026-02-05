export const BrandArrow = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="0 0 32 24"
			{...props}>
			<defs>
				<style>
					{`
      .brand-arrow-cls-1 {
        fill: url(#brand-arrow-linear-gradient-2);
      }

      .brand-arrow-cls-2 {
        mask: url(#brand-arrow-mask);
      }

      .brand-arrow-cls-3 {
        fill: url(#brand-arrow-linear-gradient-4);
      }

      .brand-arrow-cls-4 {
        fill: url(#brand-arrow-linear-gradient-3);
      }

      .brand-arrow-cls-5 {
        fill: url(#brand-arrow-linear-gradient-5);
      }

      .brand-arrow-cls-6 {
        fill: url(#brand-arrow-radial-gradient-2);
      }

      .brand-arrow-cls-6, .brand-arrow-cls-7 {
        opacity: .15;
      }

      .brand-arrow-cls-8 {
        fill: url(#brand-arrow-linear-gradient);
      }

      .brand-arrow-cls-7 {
        fill: url(#brand-arrow-radial-gradient);
      }
      `}
				</style>
				<radialGradient
					id="brand-arrow-radial-gradient"
					cx="-8.99"
					cy="233.39"
					fx="-8.99"
					fy="233.39"
					r="6.88"
					gradientTransform="translate(17.3 -66.77) scale(.89 .35)"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#006eff" />
					<stop offset="1" stopColor="#fff" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					id="brand-arrow-radial-gradient-2"
					cx="6.29"
					cy="234.34"
					fx="6.29"
					fy="234.34"
					r="6.88"
					xlinkHref="#brand-arrow-radial-gradient"
				/>
				<linearGradient
					id="brand-arrow-linear-gradient"
					x1="0"
					y1="8.81"
					x2="15.85"
					y2="8.81"
					gradientTransform="translate(0 -.89)"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#005bd7" />
					<stop offset=".5" stopColor="#006eff" />
					<stop offset="1" stopColor="#0087ff" />
				</linearGradient>
				<linearGradient
					id="brand-arrow-linear-gradient-2"
					x1="-1252"
					x2="-1236.15"
					gradientTransform="translate(-1220 -.89) rotate(-180) scale(1 -1)"
					xlinkHref="#brand-arrow-linear-gradient"
				/>
				<linearGradient
					id="brand-arrow-linear-gradient-3"
					x1="16"
					y1="9.12"
					x2="16"
					y2="25.74"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fff" />
					<stop offset="1" stopColor="#000" stopOpacity="0" />
				</linearGradient>
				<mask
					id="brand-arrow-mask"
					x="0"
					y="16.15"
					width="32"
					height="15.85"
					maskUnits="userSpaceOnUse">
					<rect
						className="brand-arrow-cls-4"
						y="16.15"
						width="32"
						height="15.85"
					/>
				</mask>
				<linearGradient
					id="brand-arrow-linear-gradient-4"
					y1="-188.09"
					x2="15.85"
					y2="-188.09"
					gradientTransform="translate(0 -164.01) scale(1 -1)"
					xlinkHref="#brand-arrow-linear-gradient"
				/>
				<linearGradient
					id="brand-arrow-linear-gradient-5"
					x1="-1252"
					y1="-188.09"
					x2="-1236.15"
					y2="-188.09"
					gradientTransform="translate(-1220 -164.01) rotate(-180)"
					xlinkHref="#brand-arrow-linear-gradient"
				/>
			</defs>
			<ellipse
				className="brand-arrow-cls-7"
				cx="9.31"
				cy="15.85"
				rx="6.11"
				ry="2.44"
			/>
			<ellipse
				className="brand-arrow-cls-6"
				cx="22.88"
				cy="16.18"
				rx="6.11"
				ry="2.44"
			/>
			<g>
				<path
					className="brand-arrow-cls-8"
					d="M8.81,11.88v3.34c-.02.17.03.34.16.47.23.22.61.22.84,0l5.86-6.19c.12-.12.18-.28.17-.43,0-.16-.04-.31-.17-.43l-5.83-6.16c-.22-.18-.62-.28-.87-.03-.13.13-.19.24-.17.4v3.39c-3.87,0-7.38-2.69-8.07-6.22-.47,1.04-.73,2.18-.73,3.38,0,4.69,3.95,8.49,8.81,8.49h0Z"
				/>
				<path
					className="brand-arrow-cls-1"
					d="M32,3.38c0-1.2-.26-2.35-.73-3.38-.7,3.54-4.2,6.22-8.07,6.22v-3.39c.02-.17-.04-.27-.17-.4-.26-.25-.66-.14-.87.03l-5.83,6.16c-.12.12-.18.28-.17.43,0,.16.04.31.17.43l5.86,6.19c.23.22.61.22.84,0,.13-.13.18-.3.16-.47v-3.34c4.87,0,8.81-3.8,8.81-8.49h0Z"
				/>
			</g>
			<g className="brand-arrow-cls-2">
				<g>
					<path
						className="brand-arrow-cls-3"
						d="M8.81,20.13h0c-4.87,0-8.81,3.8-8.81,8.49,0,1.2.26,2.35.73,3.38.7-3.54,4.2-6.22,8.07-6.22v3.39c-.02.17.04.27.17.4.26.25.66.14.87-.03l5.83-6.16c.12-.12.18-.28.17-.43,0-.16-.04-.31-.17-.43l-5.86-6.19c-.23-.22-.61-.22-.84,0-.13.13-.18.3-.16.47v3.34h0Z"
					/>
					<path
						className="brand-arrow-cls-5"
						d="M32,28.62h0c0-4.69-3.95-8.49-8.81-8.49v-3.34c.02-.17-.03-.34-.16-.47-.23-.22-.61-.22-.84,0l-5.86,6.19c-.12.12-.18.28-.17.43,0,.16.04.31.17.43l5.83,6.16c.22.18.62.28.87.03.13-.13.19-.24.17-.4v-3.39c3.87,0,7.38,2.69,8.07,6.22.47-1.04.73-2.18.73-3.38h0Z"
					/>
				</g>
			</g>
		</svg>
	)
}
