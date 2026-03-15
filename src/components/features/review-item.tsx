import { StarFillIcon, UserIcon } from '@/components/icons'

export default function ReviewItem({
	username,
	rating,
	comment
}: {
	username: string
	rating: number
	comment: string
}) {
	return (
		<li className="space-y-7 rounded-3xl border border-gray-200 p-6 lg:last:hidden">
			<div className="flex items-center gap-x-4">
				<div className="flex size-10 items-center justify-center rounded-full bg-gray-200">
					<UserIcon className="size-4.5 text-gray-600" />
				</div>

				<div className="space-y-px">
					<p className="font-medium">{username}</p>
					<div className="flex items-center gap-x-px">
						{Array.from({ length: 5 }).map((_, i) => (
							<StarFillIcon
								className={`inline size-3 text-base ${i + 1 <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}`}
								key={i}
							/>
						))}
					</div>
				</div>
			</div>

			<p>{comment}</p>
		</li>
	)
}
