import Image from 'next/image'
import Link from 'next/link'

import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	LocationIcon,
	MailIcon,
	WhatsappIcon,
	XIcon
} from '@/components/icons'
import { Logo } from '@/components/ui/logo'
import { SERVICE_NAMES } from '@/utils/constants'

export default function Footer() {
	const linkClasses = `text-sm text-gray-500 duration-200 hover:text-gray-800 active:text-gray-800`

	return (
		<div className="w-full border-t border-gray-100 py-10 lg:py-16">
			<footer className="max-w-8xl mx-auto grid w-full grid-cols-2 gap-12 px-6 lg:grid-cols-7">
				<div className="col-span-full space-y-6 lg:col-span-3">
					<Link href="/" className="flex w-max items-center gap-x-3 lg:gap-x-4">
						<Logo className="size-9 lg:size-11" />
						<p className="text-3xl font-bold text-gray-800 lg:text-4xl">
							Gaenr
						</p>
					</Link>

					<p className="lg:max-w-md">
						Connecting businesses with expert talent for seamless, hassle free
						outsourcing
					</p>

					<ul className="flex flex-col gap-y-4">
						<li className="flex items-center gap-x-2">
							<LocationIcon className="text-gray-400" />
							<p className="text-sm text-gray-500">
								ICT Tower (14th Floor, Plot: E-14/X, Dhaka)
							</p>
						</li>
						<li className="flex items-center gap-x-2">
							<MailIcon className="text-gray-400" />
							<p className="text-sm text-gray-500">gaenr@support.com</p>
						</li>
						<li className="flex items-center gap-x-2">
							<WhatsappIcon className="text-gray-400" />
							<p className="text-sm text-gray-500">+123 456 7890</p>
						</li>
					</ul>
				</div>

				<ul className="flex flex-col gap-y-3">
					<li className="font-medium">Services</li>
					{SERVICE_NAMES.map((item) => (
						<li key={item}>
							<Link
								href={`/services/${item.toLowerCase().replace(' ', '-')}`}
								className={linkClasses}>
								{item}
							</Link>
						</li>
					))}
				</ul>

				<ul className="flex flex-col gap-y-3">
					<li className="font-medium">Support</li>
					{[
						'Payment Procedure',
						'Hiring Process',
						'Joining Process',
						'Contact'
					].map((item) => (
						<li key={item}>
							<Link
								href={`/${item.toLowerCase().replace(' ', '-')}`}
								className={linkClasses}>
								{item}
							</Link>
						</li>
					))}
				</ul>

				<ul className="flex flex-col gap-y-3">
					<li className="font-medium">Company</li>
					{['About Gaenr', 'Careers', 'Blogs'].map((item) => (
						<li key={item}>
							<Link
								href={`/${item.toLowerCase().replace(' ', '-')}`}
								className={linkClasses}>
								{item}
							</Link>
						</li>
					))}
				</ul>

				<ul className="flex flex-col gap-y-3">
					<li className="font-medium">Legal</li>
					{['Privacy Policy', 'Terms of Service', 'Return Policy'].map(
						(item) => (
							<li key={item}>
								<Link
									href={`/${item.toLowerCase().replace(' ', '-')}`}
									className={linkClasses}>
									{item}
								</Link>
							</li>
						)
					)}
				</ul>

				<div className="col-span-full grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-[max-content_1fr] md:gap-y-3">
					<ul className="flex items-center gap-x-6 md:row-start-2 md:place-self-start">
						<li>
							<Link
								href="#"
								target="_blank"
								className={`${linkClasses} flex size-7 items-center justify-center rounded-xl border border-gray-200`}>
								<FacebookIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								target="_blank"
								className={`${linkClasses} flex size-7 items-center justify-center rounded-xl border border-gray-200`}>
								<InstagramIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								target="_blank"
								className={`${linkClasses} flex size-7 items-center justify-center rounded-xl border border-gray-200`}>
								<LinkedinIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								target="_blank"
								className={`${linkClasses} flex size-7 items-center justify-center rounded-xl border border-gray-200`}>
								<XIcon className="h-3 w-auto" />
							</Link>
						</li>
					</ul>
					<p className="text-sm md:col-start-1">
						&copy; {new Date().getFullYear()} Gaenr. All rights reserved.
					</p>
					<div className="flex items-end justify-center gap-x-3 rounded-xl border border-gray-800 px-4 py-2 md:place-self-end">
						<Image
							src="/flag.png"
							alt="Palestine Flag"
							width={28}
							height={28}
						/>
						<p className="text-sm font-medium">
							From the river to the sea, Palestine will be free
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
