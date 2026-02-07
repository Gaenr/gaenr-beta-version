'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'
import FeedbackFormSchema from '@/lib/feedback-form.schema'

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

	function onSubmit(data: FormData) {}

	return (
		<form
			className="grid grid-cols-1 items-start gap-x-6 gap-y-3 self-stretch md:grid-cols-2"
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
			<Controller
				name="feedbackType"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Feedback type"
						errorMessage={errors.sharedBy?.message}
						selected={value}
						onChange={onChange}
						isRequired>
						<SelectItem value="suggestion" key="suggestion">
							Suggestion
						</SelectItem>
						<SelectItem value="bug report" key="bug report">
							Bug Report
						</SelectItem>
						<SelectItem value="feature request" key="feature request">
							Feature Request
						</SelectItem>
						<SelectItem value="other" key="other">
							Other
						</SelectItem>
					</Select>
				)}
			/>
			<div className="col-span-full flex flex-col gap-y-1.5" key="feedback">
				<label
					htmlFor="feedback"
					className='text-sm font-medium after:ms-0.5 after:text-rose-600 after:content-["*"]'>
					Your feedback
				</label>
				<textarea
					id="feedback"
					className="h-50 w-full resize-none rounded-2xl border border-gray-200 p-3 duration-300 outline-none placeholder:text-gray-500 hover:bg-gray-100 focus:border-gray-400"
					{...register('message')}
				/>
				<p className="line-clamp-1 text-xs font-medium break-all text-rose-400">
					{errors.message?.message ? errors.message?.message : '\u00A0'}
				</p>
			</div>

			<Button color="primary" radius="lg" className="col-span-full mx-auto">
				Submit
			</Button>
		</form>
	)
}
