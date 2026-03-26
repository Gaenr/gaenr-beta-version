'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import Button from '@/components/ui/button'
import Input from '@/components/ui/form/input'
import { Select, SelectItem } from '@/components/ui/form/select'
import Textarea from '@/components/ui/form/textarea'
import { submitFeedback } from '@/lib/action'
import FeedbackFormSchema from '@/lib/feedback-form.schema'

type FormData = z.infer<typeof FeedbackFormSchema>

const sharedByOptions: { label: string; value: FormData['sharedBy'] }[] = [
	{ label: 'Client', value: 'client' },
	{ label: 'Freelancer', value: 'freelancer' },
	{ label: 'Visitor', value: 'visitor' }
]

const feedbackTypeOptions: {
	label: string
	value: FormData['feedbackType']
}[] = [
	{ label: 'Suggestion', value: 'suggestion' },
	{ label: 'Bug report', value: 'bug_report' },
	{ label: 'Feature request', value: 'feature_request' },
	{ label: 'Other', value: 'other' }
]

export default function FeedbackForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm<FormData>({
		resolver: zodResolver(FeedbackFormSchema)
	})

	async function onSubmit(data: FormData) {
		const { success, message } = await submitFeedback(data)

		if (success) toast.success(message)
		else toast.error(message)

		reset()
	}

	return (
		<form
			className="grid grid-cols-1 items-start gap-x-6 gap-y-3 sm:grid-cols-2"
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
						label="Share Feedback as"
						options={sharedByOptions}
						errorMessage={errors.sharedBy?.message}
						selected={value}
						onChange={onChange}
						isRequired>
						{(options) =>
							options().map((option) => (
								<SelectItem value={option.value} key={option.value}>
									{option.label}
								</SelectItem>
							))
						}
					</Select>
				)}
			/>
			<Controller
				name="feedbackType"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Feedback Type"
						options={feedbackTypeOptions}
						errorMessage={errors.feedbackType?.message}
						selected={value}
						onChange={onChange}
						isRequired>
						{(options) =>
							options().map((option) => (
								<SelectItem value={option.value} key={option.value}>
									{option.label}
								</SelectItem>
							))
						}
					</Select>
				)}
			/>
			<Textarea
				id="feedback"
				label="Your Feedback"
				classNames={{ base: 'col-span-full' }}
				register={register('message')}
				errorMessage={errors.message?.message}
				isRequired
			/>

			<Button color="primary" className="col-span-full mx-auto">
				Submit
			</Button>
		</form>
	)
}
