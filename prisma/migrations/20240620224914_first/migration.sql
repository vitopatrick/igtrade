-- CreateTable
CREATE TABLE "Users" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "clerkId" STRING NOT NULL,
    "first_name" STRING NOT NULL,
    "last_name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "revenue" INT4 NOT NULL DEFAULT 0,
    "profit" INT4 NOT NULL DEFAULT 0,
    "trading_bonus" INT4 NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposits" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "amount" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" STRING NOT NULL,
    "method" STRING NOT NULL,
    "remarks" STRING NOT NULL,
    "clerkId" STRING NOT NULL,
    "prove" STRING NOT NULL,

    CONSTRAINT "Deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawals" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "amount" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" STRING NOT NULL,
    "method" STRING NOT NULL,
    "remarks" STRING NOT NULL,
    "clerkId" STRING NOT NULL,

    CONSTRAINT "Withdrawals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "remarks" STRING NOT NULL,
    "type" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INT4 NOT NULL,
    "clerkId" STRING NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChartData" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "profit" INT4 NOT NULL,
    "clerkId" STRING NOT NULL,
    "date" STRING NOT NULL,

    CONSTRAINT "ChartData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_clerkId_key" ON "Users"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
