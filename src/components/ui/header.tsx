import Link from 'next/link'

import Button from '@/components/ui/button'
import SearchBar from '@/components/ui/searchbar'

export default function Header() {
	return (
		<header className="from-brand-600 via-brand-700 to-brand-800 h-auto w-full bg-linear-to-br px-6 py-8">
			<div className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 gap-y-16 lg:grid-cols-2">
				<section className="flex flex-col items-center gap-y-8 sm:gap-y-12">
					<article className="flex flex-col items-center gap-y-4">
						<h1 className="flex flex-col items-center text-center text-[clamp(1rem,7vw,2rem)] font-bold text-white sm:text-[clamp(1rem,7vw,3rem)]">
							Stop wasting time and Start getting results
						</h1>
						<p className="hidden text-center text-white sm:block">
							Assign projects with ease and get reliable results. Gaenr connects
							you with verified student experts who deliver efficiently, so you
							can focus on what matters.
						</p>
					</article>

					<div className="w-full space-y-3 self-stretch">
						<SearchBar />
						<div className="hidden items-center gap-x-3 px-6 sm:flex">
							<p className="text-xs font-semibold text-white">Popular</p>
							<ul className="flex items-center gap-x-1.5">
								<li key="popular-1">
									<Link
										href="/service/graphics-design"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white">
										Graphics Design
									</Link>
								</li>
								<li key="popular-2">
									<Link
										href="/service/wordpress-website"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white">
										WordPress Website
									</Link>
								</li>
								<li key="popular-3">
									<Link
										href="/service/video-editing"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white">
										Video Editing
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex items-center gap-x-3">
						<Button>Assign Task</Button>
						<Button>Join as Expert</Button>
					</div>
				</section>

				<section>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vero
					aliquid repellendus dolor unde beatae tempore natus quas ab nisi,
					consectetur omnis similique, repellat ducimus aliquam dolore facere
					quibusdam? Eveniet!
				</section>
			</div>
		</header>
	)
}
