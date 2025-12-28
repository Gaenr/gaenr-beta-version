import Link from 'next/link'

import Button from '@/components/ui/button'
import SearchBar from '@/components/ui/searchbar'

export default function Header() {
	return (
		<header className="relative h-auto min-h-[calc(100dvh-var(--navbar-height))] w-full bg-[url('/svgs/hero.svg')] bg-cover bg-no-repeat px-6 py-8 lg:flex lg:items-center lg:justify-center">
			<div className="lg:max-w-8xl mx-auto grid w-full max-w-3xl grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-24">
				<section className="flex flex-col items-center gap-y-8 sm:gap-y-12">
					<article className="flex flex-col items-center gap-y-4 lg:items-start lg:gap-y-8">
						<h1 className="flex flex-col items-center text-[clamp(1rem,7vw,2rem)] font-bold text-white uppercase sm:text-[clamp(1rem,7vw,3rem)] lg:items-start lg:gap-y-3 lg:text-5xl">
							<p>Stop wasting time</p>
							<p>Start getting results</p>
						</h1>
						<p className="hidden text-center text-white sm:block lg:text-left">
							Assign projects with ease and get reliable results. Gaenr connects
							you with verified student experts who deliver efficiently, so you
							can focus on what matters.
						</p>
					</article>

					<div className="w-full space-y-3 self-stretch lg:max-w-xl">
						<SearchBar />
						<div className="hidden items-center gap-x-3 px-6 sm:flex">
							<p className="text-xs font-semibold text-white">Popular</p>
							<ul className="flex items-center gap-x-1.5">
								<li key="popular-1">
									<Link
										href="/service/graphics-design"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white active:bg-white">
										Graphics Design
									</Link>
								</li>
								<li key="popular-2">
									<Link
										href="/service/wordpress-website"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white active:bg-white">
										WordPress Website
									</Link>
								</li>
								<li key="popular-3">
									<Link
										href="/service/video-editing"
										className="rounded-full bg-white/70 px-2 py-1 text-xs font-medium text-zinc-700 duration-200 hover:bg-white active:bg-white">
										Video Editing
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="flex items-center gap-x-3 lg:self-start">
						<Link href="/assign-task">
							<Button>Assign Task</Button>
						</Link>
						<Link href="/join">
							<Button>Join as Expert</Button>
						</Link>
					</div>
				</section>

				<section>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vero
					aliquid repellendus dolor unde beatae tempore natus quas ab nisi,
					consectetur omnis similique, repellat ducimus aliquam dolore facere
					quibusdam? Eveniet!
				</section>
			</div>

			<div className="absolute bottom-1/8 left-0 hidden h-32 w-16 rounded-tr-full rounded-br-full bg-blue-200/30 shadow-md saturate-150 2xl:block"></div>
		</header>
	)
}
