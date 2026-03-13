import { StarFillIcon, UserIcon } from '../icons'

export default function Review() {
	return (
		<div className="space-y-7 border-b border-gray-200 pb-7 last:border-none last:pb-0">
			<div className="flex items-center gap-4">
				<div className="flex size-10 items-center justify-center rounded-full bg-gray-200">
					<UserIcon className="text-lg text-gray-600" />
				</div>

				<div className="space-y-px">
					<p className="font-medium">Tasfin Hasan</p>
					<div className="flex items-center gap-x-px">
						{Array.from({ length: 5 }).map((_, i) => (
							<StarFillIcon
								className={`inline size-3 text-base ${i + 1 <= Math.round(3.2) ? 'text-primary' : 'text-gray-300'}`}
								key={i}
							/>
						))}
					</div>
				</div>

				<p className="grow text-right text-sm font-medium text-gray-500">
					May 21, 2025
				</p>
			</div>

			<p>
				Like it very much, its comfortable, good quality, the weights are easy
				to remove and put back, The strap around the waist comes lose in the box
				and its a bit tricky to put it on with the right length, specially if
				you have a small waist, but when that is done its all good to go. Its
				very easy to remove and stays on very well.
			</p>
		</div>
	)
}
