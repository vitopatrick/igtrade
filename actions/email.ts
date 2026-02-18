'use server'

import { sendWelcomeEmail } from '@/lib/email'

export async function sendWelcomeEmailAction(
  email: string,
  password: string,
  name: string,
) {
  try {
    const result = await sendWelcomeEmail(email, password, name)
    return result
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    return { success: false, error }
  }
}
