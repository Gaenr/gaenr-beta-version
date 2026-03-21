'use client'

import { Toaster } from 'react-hot-toast'

import { AlertIcon } from '@/components/icons'
import { CheckIcon } from '@/components/icons/check'

export default function HotToast() {
	return (
		<Toaster
			position="top-right"
			gutter={12}
			toastOptions={{
				success: {
					className: 'rounded-2xl! bg-[#12b886]! py-2! font-medium text-white!',
					icon: <CheckIcon className="box-content size-5 shrink-0 px-1" />
				},
				error: {
					className: 'rounded-2xl! bg-[#D8000C]! py-2! font-medium text-white!',
					icon: <AlertIcon className="box-content size-5 shrink-0 px-1" />
				}
			}}></Toaster>
	)
}
