'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { createContext, ReactNode, useContext, useState } from 'react'

import { SelectArrowIcon, TickIcon } from '@/components/icons'

interface SelectProps {
	children: ReactNode
	label: string
	errorMessage?: string
	className?: string
	selected: string | undefined
	onChange: (value: string) => void
	isRequired?: boolean
	isDisabled?: boolean
}

interface SelectItemProps {
	children: ReactNode
	value: string
	startContent?: ReactNode
	className?: string
}

interface SelectContext {
	selected: string | undefined
	handleSelection: (value: string) => void
}

const selectContext = createContext<SelectContext | null>(null)

export function Select({
	children,
	label,
	errorMessage,
	className,
	selected,
	onChange,
	isRequired = false,
	isDisabled = false
}: SelectProps) {
	const [showDropdown, setShowDropdown] = useState(false)

	function handleSelection(value: string) {
		setShowDropdown(false)
		onChange(value)
	}

	return (
		<selectContext.Provider value={{ selected, handleSelection }}>
			<div
				className={`${className} relative flex flex-col gap-y-1.5`}
				key={label}>
				<label
					htmlFor={label}
					className={`${isRequired && 'after:ms-0.5 after:text-rose-600 after:content-["*"]'} text-sm font-medium`}>
					{label}
				</label>
				<button
					type="button"
					className={`${showDropdown && 'text-gray-500'} flex w-full! items-center justify-between rounded-2xl border border-gray-200 p-3`}
					disabled={isDisabled}
					onClick={() => setShowDropdown(!showDropdown)}>
					{selected ? (
						<span className="capitalize">{selected}</span>
					) : (
						<span>None selected</span>
					)}
					<SelectArrowIcon
						className={` ${showDropdown ? 'rotate-180' : 'rotate-0'} duration-400`}
					/>
				</button>
				<p className="line-clamp-1 text-xs font-medium break-all text-rose-400">
					{errorMessage ? errorMessage : '\u00A0'}
				</p>

				<AnimatePresence>
					{showDropdown && (
						<motion.div
							initial={{ scale: 0.9, y: -20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.9, y: -20, opacity: 0 }}
							transition={{
								type: 'spring',
								damping: 25,
								stiffness: 300,
								duration: 0.4
							}}
							className="xyz absolute top-full left-1/2 z-20 w-full -translate-x-1/2 -translate-y-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
							<ul className="min-w-52 p-2">{children}</ul>
						</motion.div>
					)}
				</AnimatePresence>

				{showDropdown && (
					<div
						className="fixed inset-0 z-10 h-screen w-screen bg-none"
						onClick={() => setShowDropdown(!showDropdown)}
					/>
				)}
			</div>
		</selectContext.Provider>
	)
}

export function SelectItem({
	children,
	value,
	startContent,
	className
}: SelectItemProps) {
	const context = useContext(selectContext)
	if (!context) {
		throw new Error('SelectItem must be used within a Select')
	}

	const { selected, handleSelection } = context

	return (
		<li
			className={`${selected === value && 'bg-dark-500 font-medium'} ${className} flex cursor-pointer items-center gap-x-4 rounded-xl px-3 py-2 text-sm text-nowrap duration-300 hover:bg-gray-200`}
			onClick={() => handleSelection(value)}>
			{startContent}
			{children}
			<span className="ml-auto">{selected === value && <TickIcon />}</span>
		</li>
	)
}
