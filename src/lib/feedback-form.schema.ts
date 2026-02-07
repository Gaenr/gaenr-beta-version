import * as z from 'zod'

const FeedbackFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(3, 'Minimum 3 characters')
		.max(32, 'Maximum 32 characters')
		.or(z.literal('')),
	email: z
		.string()
		.trim()
		.max(64, 'Maximum 64 characters')
		.pipe(z.email())
		.or(z.literal('')),
	sharedBy: z.enum(['client', 'freelancer', 'visitor'], 'Select an option'),
	feedbackType: z.enum(
		['suggestion', 'bug report', 'feature request', 'other'],
		'Select a feedback type'
	),
	message: z
		.string()
		.trim()
		.min(10, 'Minimum 10 characters')
		.max(1000, 'Maximum 1000 characters')
})

export default FeedbackFormSchema
