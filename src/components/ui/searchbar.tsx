'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { SearchIcon } from '@/components/icons'

export default function SearchBar() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	return (
		<form className="flex items-center">
			<input
				type="text"
				placeholder='Search To "Find Services"'
				autoComplete="OFF"
				className="block h-12 w-full self-stretch rounded-full bg-white pr-18 pl-4 text-sm font-medium outline-2 outline-offset-2 outline-transparent placeholder:text-zinc-400 focus:outline-white"
			/>
			<button
				type="submit"
				className="bg-primary active:bg-primary-dark -ml-14 inline-flex h-10 items-center justify-center rounded-full px-4 duration-200">
				<SearchIcon className="size-5 text-white" />
			</button>
		</form>
	)
}
