import ServiceCard from '@/components/features/service-card'
import {
	NoFeeIcon,
	SecurePaymentIcon,
	VerifiedIcon,
	WorkflowIcon
} from '@/components/icons'
import Breadcrumbs from '@/components/ui/breadcrumbs'

const services = [
	{
		name: 'Content Writing',
		description: 'Compelling copy that engages and converts your audience'
	},
	{
		name: 'Graphics Design',
		description: 'Eye-catching visuals that elevate your brand identity'
	},
	{
		name: 'Video Editing',
		description: 'Professional video editing that tells your story effectively'
	},
	{
		name: 'UX & UI Design',
		description:
			'Intuitive and visually appealing designs for seamless user experience'
	},
	{
		name: 'WordPress Website',
		description: 'Custom WordPress websites tailored to your business needs'
	},
	{
		name: 'Presentation Design',
		description: 'Engaging presentation designs that captivate your audience'
	}
]

export default function Page() {
	return (
		<main className="flex flex-col items-center gap-y-12 pb-12 lg:gap-y-20 lg:pb-20">
			<section className="bg-primary flex w-full flex-col items-center justify-center gap-y-7 bg-[url('/hero-2.png')] bg-cover bg-center bg-no-repeat py-12">
				<Breadcrumbs href="services" title="Services" />

				<article className="flex w-full max-w-xl flex-col items-center gap-y-4 px-6 sm:gap-y-6">
					<h1 className="text-3xl font-semibold text-white">Title / Header</h1>
					<p className="hidden text-center text-white sm:block">
						Lorem ipsum dolor sit amet consectetur adipisicing elit Quos eanon
						doloremque quod alias voluptatibus voluptates
					</p>
				</article>
			</section>

			<section className="flex w-full max-w-4xl flex-col gap-y-9 px-6">
				<div className="hidden items-center gap-x-5 md:flex">
					<h2 className="text-lg font-medium text-nowrap lg:block">
						Our Services
					</h2>
					<div className="h-0.5 w-full grow rounded-full bg-gray-200/60 lg:block" />
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-9">
					{services.map(({ name, description }, index) => (
						<ServiceCard
							name={name}
							description={description}
							link={name}
							index={index}
							key={name}
						/>
					))}
				</div>
			</section>

			<section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-y-8 px-6 md:grid-cols-3 md:gap-x-12">
				<div className="hidden items-center gap-x-5 self-stretch md:flex">
					<h2 className="text-lg font-medium text-nowrap lg:block">
						Assign Task
					</h2>
					<div className="h-0.5 w-full grow rounded-full bg-gray-200/60 lg:block" />
				</div>

				<div className="grid w-full grid-cols-1 items-center gap-9 md:grid-cols-3">
					<iframe
						src="https://www.youtube.com/embed/aoag03mSuXQ?si=UzkwpJHc6zeY2tu-"
						title="How to assign task on Gaenr"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						className="block aspect-video w-full rounded-3xl md:col-span-2"
						allowFullScreen
					/>

					<div className="space-y-6">
						<div className="space-y-2">
							<h3 className="text-xl font-medium">
								<span className="text-primary-dark">Assign Task</span>&nbsp;
								<span>on Gaenr</span>
							</h3>
							<p className="text-sm text-gray-500">
								Follow these simple steps to assign tasks on Gaenr
							</p>
						</div>

						<ul className="flex flex-col items-start">
							<li className="group flex items-center gap-x-6 gap-y-0.5">
								<div className="flex size-8 shrink-0 flex-nowrap items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 duration-200 group-hover:ring-0">
									1
								</div>
								<p className="font-medium">Step 1</p>
							</li>
							<li className="ml-4 h-6 w-0.5 bg-gray-300"></li>
							<li className="group flex items-center gap-x-6 gap-y-0.5">
								<div className="flex size-8 shrink-0 flex-nowrap items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 duration-200 group-hover:ring-0">
									2
								</div>
								<p className="font-medium">Step 2</p>
							</li>
							<li className="ml-4 h-6 w-0.5 bg-gray-300"></li>
							<li className="group flex items-center gap-x-6 gap-y-0.5">
								<div className="flex size-8 shrink-0 flex-nowrap items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 duration-200 group-hover:ring-0">
									3
								</div>
								<p className="font-medium">Step 3</p>
							</li>
							<li className="ml-4 h-6 w-0.5 bg-gray-300"></li>
							<li className="group flex items-center gap-x-6 gap-y-0.5">
								<div className="flex size-8 shrink-0 flex-nowrap items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 duration-200 group-hover:ring-0">
									4
								</div>
								<p className="font-medium">Step 4</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="mx-auto grid w-max grid-cols-1 gap-4 md:grid-cols-2">
				<h2 className="col-span-full mb-4 flex justify-center gap-x-2 text-2xl font-semibold text-gray-700 sm:gap-y-2 sm:text-3xl md:mb-8">
					<p>Trust</p>
					<p className="text-primary-dark">Gaenr</p>
				</h2>
				<div className="group flex items-center gap-x-6 md:ml-auto md:flex-row-reverse md:gap-x-8">
					<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none md:size-18 md:rounded-full md:rounded-br-none">
						<VerifiedIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in md:translate-1" />
					</div>
					<p className="text-lg font-medium">Verified Experts</p>
				</div>

				<div className="group flex items-center gap-x-6 md:gap-x-8">
					<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none md:size-18 md:rounded-full md:rounded-bl-none">
						<WorkflowIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in md:-translate-x-1 md:translate-y-1" />
					</div>
					<p className="text-lg font-medium">Managed Workflow</p>
				</div>

				<div className="group flex items-center gap-x-6 md:ml-auto md:flex-row-reverse md:gap-x-8">
					<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none md:size-18 md:rounded-full md:rounded-tr-none">
						<SecurePaymentIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in md:translate-x-1 md:-translate-y-1" />
					</div>
					<p className="text-lg font-medium">Secure Payments</p>
				</div>

				<div className="group flex items-center gap-x-6 md:gap-x-8">
					<div className="bg-primary group border-primary flex size-14 items-center justify-center rounded-2xl border-3 duration-300 ease-in group-hover:bg-white group-hover:shadow-none md:size-18 md:rounded-full md:rounded-tl-none">
						<NoFeeIcon className="group-hover:text-primary size-6 text-white duration-300 ease-in md:-translate-1" />
					</div>
					<p className="text-lg font-medium">No Platform Fee</p>
				</div>
			</section>
		</main>
	)
}
