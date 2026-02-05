import {
	ContentWritingIcon,
	GraphicsDesignIcon,
	PresentationDesignIcon,
	UIAndUXDesignIcon,
	VideoEditingIcon,
	WordpressWebsiteIcon
} from '@/components/icons'

const serviceIcons = [
	ContentWritingIcon,
	GraphicsDesignIcon,
	VideoEditingIcon,
	UIAndUXDesignIcon,
	WordpressWebsiteIcon,
	PresentationDesignIcon
]
export default function ServiceBox({
	children,
	id
}: {
	children?: React.ReactNode
	id: number
}) {
	const Icon = serviceIcons[id]

	return (
		<li className="space-y-7 rounded-3xl border border-slate-200 bg-white p-6">
			<div className="from-primary-light via-primary to-primary-dark flex size-12 items-center justify-center rounded-xl bg-linear-to-br">
				<Icon className="size-7 text-white" />
			</div>
			<p className="font-medium">{children}</p>
		</li>
	)
}
