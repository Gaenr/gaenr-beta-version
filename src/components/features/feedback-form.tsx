'use client'

import FeedbackFormSchema from '@/lib/feedback-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import Button from '../ui/button'
import Input from '../ui/input'
import { Select, SelectItem } from '../ui/select'

type FormData = z.infer<typeof FeedbackFormSchema>

export default function FeedbackForm() {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm<FormData>({
		resolver: zodResolver(FeedbackFormSchema)
	})

	function onSubmit(data: FormData) {
		console.log(data)
	}

	return (
		<form
			autoComplete="off"
			className="grid w-full max-w-xl grid-cols-2 items-start gap-x-6 gap-y-2"
			onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Name"
				register={register('name')}
				errorMessage={errors.name?.message}
			/>
			<Input
				label="Email"
				register={register('email')}
				errorMessage={errors.email?.message}
			/>
			<Controller
				name="sharedBy"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Share feedback as"
						errorMessage={errors.sharedBy?.message}
						selected={value}
						onChange={onChange}
						isRequired>
						<SelectItem value="client" key="client">
							Client
						</SelectItem>
						<SelectItem value="freelancer" key="freelancer">
							Freelancer
						</SelectItem>
						<SelectItem value="visitor" key="visitor">
							Visitor
						</SelectItem>
					</Select>
				)}
			/>
			<div className="col-span-full flex flex-col gap-y-1.5" key="feedback">
				<label
					htmlFor="feedback"
					className='text-sm font-medium after:ms-0.5 after:text-rose-600 after:content-["*"]'>
					Feedback
				</label>
				<textarea
					id="feedback"
					className="h-40 w-full resize-none rounded-2xl border border-gray-200 px-4 py-2 duration-300 outline-none placeholder:text-neutral-500 focus:border-gray-400"
					{...register('sharedBy')}
				/>
				<p className="line-clamp-1 text-xs break-all text-rose-300">
					{errors.feedback?.message ? errors.feedback?.message : '\u00A0'}
				</p>
			</div>

			<Button color="primary" radius="lg">
				Submit
			</Button>
		</form>
	)
}
