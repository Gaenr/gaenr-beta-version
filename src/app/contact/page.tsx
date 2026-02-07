import Link from 'next/link'

import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	LocationIcon,
	MailIcon,
	PhoneIcon,
	XIcon
} from '@/components/icons'
import Breadcrumbs from '@/components/ui/breadcrumbs'

export default function Page() {
	return (
		<main className="flex flex-col items-center gap-y-12 pb-12 md:gap-y-20">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-12">
				<Breadcrumbs href="contact" title="Contact" />

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Title / Header</h1>
					<p className="hidden text-center text-white sm:block">
						Lorem ipsum dolor sit amet consectetur adipisicing elit Quos eanon
						doloremque quod alias voluptatibus voluptates
					</p>
				</article>
			</section>

			<section className="grid w-full max-w-6xl grid-cols-1 items-start gap-10 divide-gray-200/60 px-6 md:grid-cols-3 md:divide-x">
				<div className="flex flex-col items-start">
					<div className="flex items-center gap-x-2 rounded-full bg-gray-700 px-3.5 py-1">
						<PhoneIcon className="text-white" />
						<p className="font-medium text-white">Phone</p>
					</div>
					<p className="mt-5 mb-8 text-sm text-gray-500">
						For general inquiries, please call us at our main phone number.
					</p>
					<p className="font-medium">+09639116987</p>
				</div>

				<div className="flex flex-col items-start">
					<div className="flex items-center gap-x-2 rounded-full bg-gray-700 px-3.5 py-1">
						<MailIcon className="text-white" />
						<p className="font-medium text-white">Email</p>
					</div>
					<p className="mt-5 mb-8 text-sm text-gray-500">
						For support or general inquiries, please email us at our support
						email address.
					</p>
					<p className="font-medium">gaenr@example.com</p>
				</div>

				<div className="flex flex-col items-start">
					<div className="rounded-full bg-gray-700 px-3.5 py-1">
						<p className="font-medium text-white">Socials</p>
					</div>
					<p className="mt-5 mb-8 text-sm text-gray-500">
						For the latest updates and news, please follow us on our social
						media channels.
					</p>

					<ul className="flex items-center gap-x-6 md:row-start-2 md:place-self-start">
						<li>
							<Link
								href="#"
								className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-700 active:text-gray-700`}>
								<FacebookIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-700 active:text-gray-700`}>
								<InstagramIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-700 active:text-gray-700`}>
								<LinkedinIcon className="h-4 w-auto" />
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className={`flex size-7 items-center justify-center rounded-xl border border-slate-200 text-sm text-gray-500 duration-200 hover:text-gray-700 active:text-gray-700`}>
								<XIcon className="h-3 w-auto" />
							</Link>
						</li>
					</ul>
				</div>
			</section>

			<section className="space-y-5">
				<div className="mx-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
					<div className="flex items-center gap-x-2 rounded-full border-2 border-gray-700 px-3 py-0.75">
						<LocationIcon />
						<p className="font-medium">Map</p>
					</div>
					<p>ICT Tower (14th Floor, Plot: E-14/X, Dhaka)</p>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5550386536584!2d90.39090203415243!3d23.72757889444877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c2c452899b%3A0x69785a7d402ef96a!2sP9HR%2B6R8%20BUET%20Campus%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1770309034828!5m2!1sen!2sbd"
					loading="lazy"
					className="h-[50dvh] w-dvw bg-gray-200"
					allowFullScreen></iframe>
			</section>
		</main>
	)
}
