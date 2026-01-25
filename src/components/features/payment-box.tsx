import {
	CheckSquareIcon,
	CreditCardIcon,
	PhoneIcon,
	SelectionsIcon,
	TimerIcon
} from '@/components/icons'

const processIcons = [
	SelectionsIcon,
	PhoneIcon,
	CreditCardIcon,
	TimerIcon,
	CheckSquareIcon
]

export default function PaymentBox({
	id,
	title,
	description
}: {
	id: number
	title: string
	description: string
}) {
	const Icon = processIcons[id]

	return (
		<li className="flex w-full max-w-sm items-center gap-x-6 sm:flex-col sm:items-start sm:gap-y-4">
			<Icon className="text-primary size-7 shrink-0" />
			<div className="flex h-full flex-col gap-y-1">
				<p className="font-medium">{title}</p>
				<p className="max-w-xs text-sm font-medium text-zinc-500">
					{description}
				</p>
				<div className="flex h-4 w-8 translate-y-1 items-center justify-center rounded-full bg-zinc-100 text-[10px] leading-0 font-bold text-nowrap text-zinc-400">
					{id + 1} / 5
				</div>
			</div>
		</li>
	)
}
