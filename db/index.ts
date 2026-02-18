import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

// Create postgres connection with Neon-optimized settings
const client = postgres(process.env.DATABASE_URL, {
  idle_timeout: 20,        // Close idle connections after 20s (before Neon kills them)
  max_lifetime: 60 * 5,    // Recycle connections every 5 minutes
  connect_timeout: 10,     // Timeout new connections after 10s
  max: 10,                 // Max 10 connections in pool
})

// Create drizzle instance
export const db = drizzle(client, { schema })
