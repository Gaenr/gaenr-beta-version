'use client'

import Link from 'next/link'
import { createContext, ReactNode, useContext } from 'react'

import { ShortArrowIcon } from '@/components/icons'

type BreadcrumbsColor = 'white' | 'black'
type ClassNames = {
	base: string
	item: string
}

interface BreadcrumbsProps {
	children: ReactNode
	color?: BreadcrumbsColor
	classNames?: Partial<ClassNames>
}

interface BreadcrumbItemProps {
	children: ReactNode
	href: string
	startContent?: ReactNode
}

interface BreadcrumbsContext {
	color: BreadcrumbsColor
	classNames?: Partial<ClassNames>
}

const BreadcrumbsContext = createContext<BreadcrumbsContext | null>(null)

export function Breadcrumbs({
	children,
	color = 'black',
	classNames
}: BreadcrumbsProps) {
	return (
		<BreadcrumbsContext.Provider value={{ color, classNames }}>
			<nav className={`${classNames?.base} flex flex-wrap items-center gap-2`}>
				{children}
			</nav>
		</BreadcrumbsContext.Provider>
	)
}

export function BreadcrumbItem({
	children,
	href,
	startContent
}: BreadcrumbItemProps) {
	const context = useContext(BreadcrumbsContext)

	if (!context)
		throw new Error(
			'BreadcrumbItem must be used within a Breadcrumbs component'
		)

	const { color, classNames } = context

	return (
		<div className={`group flex items-center gap-x-1 ${classNames?.item}`}>
			<Link
				href={href}
				className={`${color === 'white' ? 'text-white' : 'hover:text-primary text-gray-800'} contents font-medium duration-300`}>
				{startContent}
				{children}
			</Link>
			<ShortArrowIcon
				className={`${color === 'white' ? 'text-white' : 'text-gray-800'} size-5 group-last:hidden`}
			/>
		</div>
	)
}
