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
	sharedBy: z.enum(['Client', 'Freelancer', 'Visitor']),
	feedbackTitle: z.enum([
		'Suggestion',
		'Bug Report',
		'Feature Request',
		'Other'
	]),
	feedback: z
		.string()
		.trim()
		.min(10, 'Minimum 10 characters')
		.max(500, 'Maximum 500 characters')
})

export default FeedbackFormSchema
