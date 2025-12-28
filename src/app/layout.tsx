import type { Metadata } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'

import InstallPrompt from '@/components/features/install-prompt'
import PWARegister from '@/components/features/pwa-register'
import Footer from '@/components/ui/footer'
import HotToast from '@/components/ui/hot-toast'
import NavBar from '@/components/ui/navbar'
import '@/css/global.css'

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin']
})

const spaceMono = Space_Mono({
	weight: ['400', '700'],
	variable: '--font-space-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	applicationName: '',
	metadataBase: new URL('https://gaenr.com'),
	authors: [{ name: '', url: '' }],
	creator: '',
	title: {
		default: 'Gaenr',
		template: 'Gaenr | %s'
	},
	description: '',
	keywords: [''],
	appleWebApp: {
		capable: true,
		title: '',
		statusBarStyle: 'black-translucent'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${dmSans.variable} ${spaceMono.variable} text-foreground bg-background grid min-h-dvh grid-rows-[max-content_1fr] font-sans antialiased`}>
				<NavBar />
				{children}
				<Footer />

				<InstallPrompt />
				<HotToast />
				<PWARegister />
			</body>
		</html>
	)
}
