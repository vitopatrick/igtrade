import { sendWelcomeEmail } from '@/lib/email'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // console.log('[API] Sending welcome email to:', email)
    const result = await sendWelcomeEmail(email, password, name)
    // console.log('[API] Email result:', JSON.stringify(result))

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('[API] Welcome email error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    )
  }
}
