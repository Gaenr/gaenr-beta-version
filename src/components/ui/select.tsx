'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useContext, useState } from 'react'

import { SelectArrowIcon, TickIcon } from '@/components/icons'

interface SelectProps {
	children: React.ReactNode
	label: string
	errorMessage?: string
	className?: string
	selected: string | undefined
	onChange: (value: string) => void
	isRequired?: boolean
	isDisabled?: boolean
}
interface SelectItemProps {
	children: React.ReactNode
	value: string
	startContent?: React.ReactNode
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
				className={`${className} relative flex flex-col gap-y-2`}
				key={label}>
				<label
					htmlFor={label}
					className={`text-sm font-medium ${isRequired && 'after:ms-0.5 after:text-rose-600 after:content-["*"]'}`}>
					{label}
				</label>
				<button
					className={`${showDropdown && 'text-neutral-400'} flex w-full! items-center justify-between rounded-2xl border border-zinc-200 px-4 py-3`}
					disabled={isDisabled}
					onClick={() => setShowDropdown(!showDropdown)}>
					{selected ? (
						<span className="capitalize">{selected}</span>
					) : (
						<span className="text-gray-500">None selected</span>
					)}
					<SelectArrowIcon
						className={` ${showDropdown ? 'rotate-180' : 'rotate-0'} duration-400`}
					/>
				</button>
				<p className="line-clamp-1 text-xs break-all text-rose-300">
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
							className="absolute top-full left-1/2 z-20 -translate-x-1/2 -translate-y-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
							<ul className="max-h-56 min-w-52 space-y-1 overflow-y-auto p-1.5">
								{children}
							</ul>
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
			className={`${selected === value && 'bg-dark-500 font-medium'} ${className} hover:bg-dark-400 flex cursor-pointer items-center gap-x-4 rounded-xl px-3 py-1.5 text-sm text-nowrap duration-300`}
			onClick={() => handleSelection(value)}>
			{startContent}
			{children}
			<span className="ml-auto">{selected === value && <TickIcon />}</span>
		</li>
	)
}
