import {
  pgTable,
  serial,
  varchar,
  timestamp,
  real,
  integer,
  text,
  boolean,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// User table (Better Auth compatible)
export const users = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  // Custom fields for trading platform
  first_name: varchar('first_name', { length: 255 }),
  last_name: varchar('last_name', { length: 255 }),
  revenue: real('revenue').notNull().default(0),
  profit: real('profit').notNull().default(0),
  trading_bonus: real('trading_bonus').notNull().default(0),
})

// Better Auth session table
export const sessions = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Better Auth account table (for OAuth providers)
export const accounts = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  expiresAt: timestamp('expiresAt'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Better Auth verification table
export const verifications = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Deposit table
export const deposits = pgTable('Deposit', {
  id: serial('id').primaryKey(),
  amount: real('amount').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  status: varchar('status', { length: 255 }).notNull(),
  method: varchar('method', { length: 255 }).notNull(),
  remarks: varchar('remarks', { length: 255 }).notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Withdrawal table
export const withdrawals = pgTable('Withdrawal', {
  id: serial('id').primaryKey(),
  amount: real('amount').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  status: varchar('status', { length: 255 }).notNull(),
  method: varchar('method', { length: 255 }).notNull(),
  remarks: varchar('remarks', { length: 255 }).notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Transaction table
export const transactions = pgTable('Transaction', {
  id: serial('id').primaryKey(),
  remarks: varchar('remarks', { length: 255 }).notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  amount: real('amount').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// ChartData table
export const chartData = pgTable('ChartData', {
  id: serial('id').primaryKey(),
  profit: real('profit').notNull(),
  date: timestamp('date').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Trade table
export const trades = pgTable('Trade', {
  id: serial('id').primaryKey(),
  amount: real('amount').notNull(),
  profit: real('profit').notNull(),
  date: timestamp('date').notNull().defaultNow(),
  commodity: varchar('commodity', { length: 255 }).notNull(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  deposits: many(deposits),
  withdrawals: many(withdrawals),
  transactions: many(transactions),
  chartData: many(chartData),
  trades: many(trades),
  sessions: many(sessions),
  accounts: many(accounts),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}))

export const depositsRelations = relations(deposits, ({ one }) => ({
  user: one(users, {
    fields: [deposits.userId],
    references: [users.id],
  }),
}))

export const withdrawalsRelations = relations(withdrawals, ({ one }) => ({
  user: one(users, {
    fields: [withdrawals.userId],
    references: [users.id],
  }),
}))

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
}))

export const chartDataRelations = relations(chartData, ({ one }) => ({
  user: one(users, {
    fields: [chartData.userId],
    references: [users.id],
  }),
}))

export const tradesRelations = relations(trades, ({ one }) => ({
  user: one(users, {
    fields: [trades.userId],
    references: [users.id],
  }),
}))
