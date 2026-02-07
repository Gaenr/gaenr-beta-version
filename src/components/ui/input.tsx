'use client'

import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
	label: string
	value?: string
	defaultValue?: string
	placeholder?: string
	errorMessage?: string
	type?:
		| 'text'
		| 'email'
		| 'url'
		| 'password'
		| 'tel'
		| 'search'
		| 'file'
		| 'date'
	register: UseFormRegisterReturn
	isRequired?: boolean
	isReadOnly?: boolean
	isDisabled?: boolean
	classNames?: {
		base?: string
		label?: string
		input?: string
	}
}

export default function Input({
	label,
	value,
	defaultValue,
	placeholder,
	errorMessage,
	type = 'text',
	register,
	isRequired = false,
	isReadOnly = false,
	isDisabled = false,
	classNames
}: InputProps) {
	return (
		<div className={`${classNames?.base} flex flex-col gap-y-1.5`} key={label}>
			<label
				htmlFor={label}
				className={`${classNames?.label} ${isRequired && 'after:ms-0.5 after:text-rose-600 after:content-["*"]'} text-sm font-medium`}>
				{label}
			</label>
			<input
				type={type}
				id={label}
				value={value}
				defaultValue={defaultValue}
				placeholder={placeholder}
				autoComplete={label}
				className={`${classNames?.input} rounded-2xl border border-gray-200 p-3 duration-300 outline-none placeholder:text-gray-500 hover:bg-gray-100 focus:border-gray-400`}
				readOnly={isReadOnly}
				disabled={isDisabled}
				{...register}
			/>
			<p className="line-clamp-1 text-xs break-all text-rose-500">
				{errorMessage ? errorMessage : '\u00A0'}
			</p>
		</div>
	)
}
