import ServiceCard from '@/components/features/service-card'
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

			<section className="flex w-full max-w-4xl flex-col gap-y-12 px-6">
				<div className="flex items-center gap-x-3">
					<p className="hidden font-medium text-nowrap lg:block">
						Our Services
					</p>
					<div className="hidden h-0.5 w-full grow rounded-full bg-gray-200/60 lg:block" />
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-9">
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

			<section>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
				corrupti et autem mollitia aspernatur est possimus, dignissimos odit
				reprehenderit sequi deserunt sunt illum, a quos eius numquam inventore
				nobis. Recusandae?
			</section>
		</main>
	)
}
