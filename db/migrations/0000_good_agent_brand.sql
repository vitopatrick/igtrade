CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"accountId" text NOT NULL,
	"providerId" text NOT NULL,
	"userId" text NOT NULL,
	"accessToken" text,
	"refreshToken" text,
	"idToken" text,
	"expiresAt" timestamp,
	"password" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ChartData" (
	"id" serial PRIMARY KEY NOT NULL,
	"profit" real NOT NULL,
	"date" timestamp NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Deposit" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"status" varchar(255) NOT NULL,
	"method" varchar(255) NOT NULL,
	"remarks" varchar(255) NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"ipAddress" text,
	"userAgent" text,
	"userId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Trade" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real NOT NULL,
	"profit" real NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"commodity" varchar(255) NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"remarks" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"amount" real NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	"image" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"revenue" real DEFAULT 0 NOT NULL,
	"profit" real DEFAULT 0 NOT NULL,
	"trading_bonus" real DEFAULT 0 NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Withdrawal" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" real NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"status" varchar(255) NOT NULL,
	"method" varchar(255) NOT NULL,
	"remarks" varchar(255) NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ChartData" ADD CONSTRAINT "ChartData_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;