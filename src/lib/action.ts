'use server'

import * as z from 'zod'
import FeedbackFormSchema from './feedback-form.schema'

type FormData = z.infer<typeof FeedbackFormSchema>

export async function submitFeedback(formData: FormData): Promise<{
	success: boolean
	message: string
}> {
	try {
		FeedbackFormSchema.parse(formData)
	} catch (error) {
		if (error instanceof z.ZodError)
			return { success: false, message: 'An error has occured.' }
	}
	return { success: true, message: 'Feedback submitted!' }
}
