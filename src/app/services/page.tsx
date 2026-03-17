import { Metadata } from 'next'

import ServiceCard from '@/components/features/service-card'
import {
	HomeIcon,
	NoFeeIcon,
	SecurePaymentIcon,
	VerifiedIcon,
	WorkflowIcon
} from '@/components/icons'
import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs'
import { AllServices } from '@/data/all-services'

export const metadata: Metadata = {
	title: 'Offered Services'
}

export default function Page() {
	return (
		<main className="flex flex-col gap-y-12 pt-0 pb-12 md:gap-y-16 md:pb-16">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-10 sm:py-12">
				<Breadcrumbs color="white">
					<BreadcrumbItem
						href="/"
						startContent={
							<HomeIcon className="mr-1 size-4.5 -translate-y-px" />
						}>
						Home
					</BreadcrumbItem>
					<BreadcrumbItem href="/services">Services</BreadcrumbItem>
				</Breadcrumbs>

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-medium text-white">Offered Services</h1>
					<p className="hidden text-center text-white sm:block">
						Lorem ipsum dolor sit amet consectetur adipisicing elit Quos eanon
						doloremque quod alias voluptatibus voluptates
					</p>
				</article>
			</section>

			<section className="mx-auto flex w-full max-w-4xl flex-col gap-y-8 px-6 md:gap-y-9">
				<div className="hidden items-center gap-x-5 sm:flex">
					<h2 className="text-lg font-medium text-nowrap">Our Services</h2>
					<div className="h-0.5 w-full grow rounded-full bg-gray-200/60" />
				</div>

				<ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-9">
					{AllServices.map(({ name, description, imageSrc, href }, i) => (
						<ServiceCard
							name={name}
							description={description}
							imageSrc={imageSrc}
							href={href}
							index={i}
							key={name}
						/>
					))}
				</ul>
			</section>

			<section className="mx-auto flex w-full max-w-4xl flex-col gap-y-8 px-6 md:gap-y-9">
				<div className="hidden items-center gap-x-5 sm:flex">
					<h2 className="text-lg font-medium text-nowrap">Watch Tutorial</h2>
					<div className="h-0.5 w-full grow rounded-full bg-gray-200/60" />
				</div>

				<div className="grid w-full grid-cols-1 items-center gap-9 md:grid-cols-3">
					<iframe
						src="https://www.youtube.com/embed/aoag03mSuXQ?si=Brq36Q_NJlHzTPcr"
						title=""
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						className="block aspect-video w-full rounded-3xl md:col-span-2"
						allowFullScreen
					/>

					<div className="text-red-600">No content yet</div>
				</div>

				<div className="space-y-9">
					<article className="space-y-4">
						<h3 className="text-xl font-medium">
							<span className="text-primary-dark">Assign Task</span>&nbsp;
							<span>on Gaenr</span>
						</h3>
						<p className="text-justify text-sm text-gray-500">
							Watch our tutorial to learn how to assign tasks on Gaenr. This
							video will guide you through the process of creating a project
							brief, selecting the right service, and connecting with our
							experts to get your work done efficiently.
						</p>
					</article>

					<ul className="relative grid grid-cols-1 gap-9 gap-x-14 md:grid-cols-2">
						<li className="flex items-center gap-x-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400 duration-200">
								1
							</div>
							<p>
								Sign up and create your project brief with clear requirements
							</p>
						</li>
						<li className="flex items-center gap-x-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400 duration-200">
								2
							</div>
							<p>
								Browse our services and create your project brief with clearly
							</p>
						</li>
						<li className="flex items-center gap-x-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400 duration-200">
								3
							</div>
							<p>
								Connect with our experts, discuss your project, and get it done
							</p>
						</li>
						<li className="flex items-center gap-x-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400 duration-200">
								4
							</div>
							<p>
								Review the work, provide feedback, and finalize your project
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="mx-auto w-max space-y-9 sm:space-y-10">
				<h2 className="text-center text-2xl font-semibold">
					<span className="text-blue-950">Trust</span>&nbsp;
					<span className="text-primary-dark">Gaenr</span>
				</h2>

				<ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
					<li className="group flex items-center gap-x-6 sm:flex-row-reverse sm:gap-x-8 md:ml-auto">
						<div className="group bg-primary border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none sm:size-18 sm:rounded-full sm:rounded-br-none">
							<VerifiedIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in sm:translate-1" />
						</div>
						<p className="text-lg font-medium">Verified Experts</p>
					</li>

					<li className="group flex items-center gap-x-6 sm:gap-x-8">
						<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none sm:size-18 sm:rounded-full sm:rounded-bl-none">
							<WorkflowIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in sm:-translate-x-1 sm:translate-y-1" />
						</div>
						<p className="text-lg font-medium">Managed Workflow</p>
					</li>

					<li className="group flex items-center gap-x-6 sm:ml-auto sm:flex-row-reverse sm:gap-x-8">
						<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none sm:size-18 sm:rounded-full sm:rounded-tr-none">
							<SecurePaymentIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in sm:translate-x-1 sm:-translate-y-1" />
						</div>
						<p className="text-lg font-medium">Secure Payments</p>
					</li>

					<li className="group flex items-center gap-x-6 sm:gap-x-8">
						<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none sm:size-18 sm:rounded-full sm:rounded-tl-none">
							<NoFeeIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in sm:-translate-1" />
						</div>
						<p className="text-lg font-medium">No Platform Fee</p>
					</li>
				</ul>
			</section>
		</main>
	)
}
