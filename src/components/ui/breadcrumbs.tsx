import { HomeIcon, ShortArrowIcon } from '@/components/icons'
import Link from 'next/link'

export default function Breadcrumbs({
	href,
	title
}: {
	href: string
	title: string
}) {
	return (
		<nav className="flex items-center justify-center gap-x-2">
			<HomeIcon className="size-4.5 -translate-y-px text-white" />
			<Link href="/" className="font-medium text-white">
				Home
			</Link>
			<ShortArrowIcon className="size-5 text-white" />
			<Link href={href} className="font-medium text-white">
				{title}
			</Link>
		</nav>
	)
}
