import { createAuthClient } from 'better-auth/react'

const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    // Browser should use relative URL
    return ''
  }
  if (process.env.NEXT_PUBLIC_APP_URL) {
    // SSR should use production URL
    return process.env.NEXT_PUBLIC_APP_URL
  }
  // Development fallback
  return 'http://localhost:3000'
}

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
})

export const { signIn, signUp, signOut, useSession } = authClient
