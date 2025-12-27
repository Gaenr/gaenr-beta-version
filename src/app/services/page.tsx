export default function Page() {
	return (
		<main className="layout-spacing space-y-24">
			<h1 className="text-center text-3xl font-medium">Explore Services</h1>

			<section className="flex gap-x-10 px-8">
				<div className="max-w-sm rounded-3xl bg-white px-6 py-7">
					<h2 className="text-2xl font-semibold">Content Writing</h2>
				</div>

				<div className="max-w-sm rounded-3xl bg-white px-6 py-7">
					<h2 className="text-2xl font-semibold">Graphics Design</h2>
					<p className="mt-2 text-sm text-zinc-600">
						Creative graphic design services for logos, branding, and marketing
						materials.
					</p>
					<div className="mt-4 flex items-center justify-between">
						<span className="text-lg font-bold text-blue-600">
							₹1,000 - ₹5,000
						</span>
						<span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
							4.8 ★
						</span>
					</div>
				</div>
			</section>
		</main>
	)
}
