'use server'

import * as z from 'zod'
import AssignTaskFormSchema from './assign-task-form.schema'
import FeedbackFormSchema from './feedback-form.schema'

export async function submitFeedback(
	formData: z.infer<typeof FeedbackFormSchema>
): Promise<{
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

export async function assignTask(
	formData: z.infer<typeof AssignTaskFormSchema>
): Promise<{ success: boolean; message: string }> {
	try {
		AssignTaskFormSchema.parse(formData)
	} catch (error) {
		if (error instanceof z.ZodError)
			return { success: false, message: 'An error has occured.' }
	}
	return { success: true, message: 'Task assigned!' }
}
