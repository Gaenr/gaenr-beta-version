import { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaProps {
	id: string
	label: string
	value?: string
	defaultValue?: string
	placeholder?: string
	errorMessage?: string
	register: UseFormRegisterReturn
	isRequired?: boolean
	isReadOnly?: boolean
	isDisabled?: boolean
	classNames?: {
		base?: string
		label?: string
		description?: string
	}
}

export default function Textarea({
	id,
	label,
	value,
	defaultValue,
	placeholder,
	errorMessage,
	register,
	isRequired = false,
	isReadOnly = false,
	isDisabled = false,
	classNames
}: TextareaProps) {
	return (
		<div
			className={`${classNames?.base} flex flex-col gap-y-1.5`}
			key="feedback">
			<label
				htmlFor={id}
				className={`${classNames?.label} ${isRequired && 'after:ms-0.5 after:text-rose-600 after:content-["*"]'} text-sm font-medium`}>
				{label}
			</label>
			<textarea
				id={id}
				value={value}
				defaultValue={defaultValue}
				placeholder={placeholder}
				className="h-50 w-full resize-none rounded-2xl border border-gray-200 p-3 duration-300 outline-none placeholder:text-gray-500 hover:bg-gray-100 focus:border-gray-400"
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
