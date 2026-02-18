import { betterAuth, BetterAuthOptions } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schema'
import { createAuthMiddleware } from 'better-auth/api'
import { sendWelcomeEmail } from './email'

const passwordMap = new WeakMap<any, string>()

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [
    {
      id: 'welcome-email',
      endpoints: {
        'sign-up/email': {
          path: '/sign-up/email',
          method: 'POST',
          use: [
            createAuthMiddleware(async (ctx) => {
              // Capture password before hashing
              const body = ctx.body as any
              if (body?.password) {
                passwordMap.set(ctx.request, body.password)
              }
            }),
          ],
          after: async (ctx: any) => {
            const user = ctx.context.user
            const plainPassword = passwordMap.get(ctx.request)
            if (user && plainPassword) {
              // Background task to send email
              sendWelcomeEmail(
                user.email,
                plainPassword,
                user.name || user.first_name || 'Trader',
              ).catch((err) => console.error('Failed to send welcome email:', err))
            }
          },
        },
      },
    } as any,
  ],
  user: {
    additionalFields: {
      first_name: {
        type: 'string',
        required: false,
      },
// ... truncated for brevity, I'll keep the existing fields
      last_name: {
        type: 'string',
        required: false,
      },
      revenue: {
        type: 'number',
        required: false,
        defaultValue: 0,
      },
      profit: {
        type: 'number',
        required: false,
        defaultValue: 0,
      },
      trading_bonus: {
        type: 'number',
        required: false,
        defaultValue: 0,
      },
    },
  },
})

export type Session = typeof auth.$Infer.Session
