import Link from 'next/link'

import { ArrowIcon } from '@/components/icons'

export default function MiniLink({
	children,
	href
}: {
	children: React.ReactNode
	href: string
}) {
	return (
		<Link
			href={href}
			className="text-primary flex items-center gap-x-1 border-b-2 border-current font-medium duration-200 hover:border-transparent">
			{children} <ArrowIcon className="size-5" />
		</Link>
	)
}
