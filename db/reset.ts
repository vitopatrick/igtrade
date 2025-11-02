import { db } from './index'
import { sql } from 'drizzle-orm'

async function resetDatabase() {
  try {
    console.log('Dropping all tables...')

    // Drop all tables in the correct order (reverse of dependencies)
    await db.execute(sql`DROP TABLE IF EXISTS "Referral" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Staking" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Trade" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Withdrawals" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Deposit" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Account" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "Session" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "User" CASCADE`)
    await db.execute(sql`DROP TABLE IF EXISTS "_prisma_migrations" CASCADE`)

    console.log('✓ All old tables dropped successfully!')
    console.log('Now run: bun run db:push')

    process.exit(0)
  } catch (error) {
    console.error('Error dropping tables:', error)
    process.exit(1)
  }
}

resetDatabase()
