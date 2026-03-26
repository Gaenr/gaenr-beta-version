'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import Button from '@/components/ui/button'
import Input from '@/components/ui/form/input'
import { Select, SelectItem } from '@/components/ui/form/select'
import Textarea from '@/components/ui/form/textarea'
import { assignTask } from '@/lib/action'
import AssignTaskFormSchema from '@/lib/assign-task-form.schema'

type FormData = z.infer<typeof AssignTaskFormSchema>

const channelOptions: { label: string; value: FormData['channel'] }[] = [
	{ value: 'email', label: 'Email' },
	{ value: 'whatsapp', label: 'Whatsapp' },
	{ value: 'facebook', label: 'Facebook' },
	{ value: 'telegram', label: 'Telegram' }
]
const serviceOptions: { label: string; value: FormData['service'] }[] = [
	{ value: 'content-writing', label: 'Content Writing' },
	{ value: 'graphics-design', label: 'Graphics Design' },
	{ value: 'video-editing', label: 'Video Editing' },
	{ value: 'ux-ui-design', label: 'UX/UI Design' },
	{ value: 'wordpress-website', label: 'WordPress Website' },
	{ value: 'presentation-design', label: 'Presentation Design' }
]
const categories = {
	'content-writing': [
		{ label: 'Blog', value: 'blog' },
		{ label: 'Copywriting', value: 'copywriting' },
		{ label: 'SEO', value: 'seo' }
	],
	'graphics-design': [
		{ label: 'Logo Design', value: 'logo-design' },
		{ label: 'Social Media Posts', value: 'social-media-posts' },
		{ label: 'Poster/Flyer Design', value: 'poster-flyer-design' },
		{ label: 'Thumbnail Design', value: 'thumbnail-design' }
	],
	'video-editing': [
		{ label: 'YouTube Video Editing', value: 'youtube-video-editing' },
		{ label: 'Short Form Videos', value: 'short-form-videos' },
		{ label: 'Ads/Promotional Videos', value: 'ads-promotional-videos' },
		{ label: 'Motion Graphics', value: 'motion-graphics' }
	],
	'ux-ui-design': [
		{ label: 'Mobile App UI Design', value: 'mobile-app-ui-design' },
		{ label: 'Website UI Design', value: 'website-ui-design' },
		{ label: 'Dashboard Design', value: 'dashboard-design' },
		{ label: 'Design Systems', value: 'design-systems' }
	],
	'wordpress-website': [
		{ label: 'Full Website Development', value: 'full-website-development' },
		{ label: 'Landing Page Design', value: 'landing-page-design' },
		{ label: 'Theme Customization', value: 'theme-customization' },
		{ label: 'SEO Setup', value: 'seo-setup' }
	],
	'presentation-design': [
		{
			label: 'PowerPoint Design',
			value: 'powerpoint-design'
		},
		{ label: 'Pitch Decks', value: 'pitch-decks' },
		{ label: 'Business Presentations', value: 'business-presentations' },
		{ label: 'Sales Decks', value: 'sales-decks' },
		{ label: 'Webinar Presentations', value: 'webinar-presentations' },
		{ label: 'Educational Slides', value: 'educational-slides' },
		{ label: 'Infographic-style Slides', value: 'infographic-style-slides' }
	]
}
const expertOptions = {
	'content-writing': [
		{
			label: 'Daren Smith',
			value: 'daren_smith'
		},
		{
			label: 'Emily Johnson',
			value: 'Emily Johnson'
		},
		{
			label: 'Michael Lee',
			value: 'Michael Lee'
		}
	],
	'graphics-design': [
		{
			label: 'Sophia Davis',
			value: 'Sophia Davis'
		},
		{
			label: 'James Wilson',
			value: 'James Wilson'
		},
		{
			label: 'Olivia Brown',
			value: 'Olivia Brown'
		}
	],
	'video-editing': [
		{
			label: 'Ethan Miller',
			value: 'Ethan Miller'
		},
		{
			label: 'Ava Anderson',
			value: 'Ava Anderson'
		},
		{
			label: 'William Taylor',
			value: 'William Taylor'
		}
	],
	'ux-ui-design': [
		{
			label: 'Isabella Martinez',
			value: 'Isabella Martinez'
		},
		{
			label: 'Benjamin Garcia',
			value: 'Benjamin Garcia'
		},
		{
			label: 'Daniel Jackson',
			value: 'Daniel Jackson'
		}
	],
	'wordpress-website': [
		{
			label: 'Mia Rodriguez',
			value: 'Mia Rodriguez'
		},
		{
			label: 'Alexander Hernandez',
			value: 'Alexander Hernandez'
		},
		{
			label: 'Charlotte Lee',
			value: 'Charlotte Lee'
		}
	],
	'presentation-design': [
		{
			label: 'Amelia White',
			value: 'Amelia White'
		},
		{
			label: 'Matthew Harris',
			value: 'Matthew Harris'
		},
		{
			label: 'Harper Clark',
			value: 'Harper Clark'
		}
	]
}

export default function AssignTaskForm({ onClose }: { onClose?: () => void }) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		resetField,
		reset
	} = useForm<FormData>({
		resolver: zodResolver(AssignTaskFormSchema)
	})
	const selectedService = useWatch({
		control,
		name: 'service'
	})

	useEffect(() => {
		resetField('category', undefined)
		resetField('expert', undefined)
	}, [selectedService, resetField])

	async function onSubmit(data: FormData) {
		const { success, message } = await assignTask(data)

		if (success) toast.success(message)
		else toast.error(message)

		reset()

		if (onClose) onClose()
	}

	return (
		<form
			className="grid grid-cols-1 items-start gap-x-6 gap-y-3 sm:grid-cols-2"
			onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Name"
				register={register('name')}
				errorMessage={errors.name?.message}
				isRequired
			/>
			<Input
				label="Email"
				register={register('email')}
				errorMessage={errors.email?.message}
				isRequired
			/>
			<Input
				type="tel"
				label="Contact No."
				register={register('contact')}
				errorMessage={errors.contact?.message}
				isRequired
			/>

			<Controller
				name="channel"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Preferred Channel"
						options={channelOptions}
						errorMessage={errors.channel?.message}
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
				name="service"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Service"
						options={serviceOptions}
						errorMessage={errors.service?.message}
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
				name="category"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Category"
						options={categories[selectedService]}
						isDisabled={!selectedService}
						errorMessage={errors.category?.message}
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
				name="expert"
				control={control}
				render={({ field: { value, onChange } }) => (
					<Select
						label="Select Expert"
						options={expertOptions[selectedService]}
						isDisabled={!selectedService}
						errorMessage={errors.expert?.message}
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
				id="description"
				label="Job Description"
				placeholder="Please describe your task clearly. Include goals, scope, format, references, and any specific instructions."
				classNames={{ base: 'col-span-full' }}
				register={register('description')}
				errorMessage={errors.description?.message}
				isRequired
			/>

			<Button color="primary" className="col-span-full mx-auto">
				Assign
			</Button>
		</form>
	)
}
