import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schema'

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
  user: {
    additionalFields: {
      first_name: {
        type: 'string',
        required: false,
      },
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
