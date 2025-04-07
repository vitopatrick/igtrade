/*
  Warnings:

  - You are about to drop the `Deposits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Withdrawals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChartData" DROP CONSTRAINT "ChartData_clerkId_fkey";

-- DropForeignKey
ALTER TABLE "Deposits" DROP CONSTRAINT "Deposits_clerkId_fkey";

-- DropForeignKey
ALTER TABLE "Trade" DROP CONSTRAINT "Trade_clerkId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_clerkId_fkey";

-- DropForeignKey
ALTER TABLE "Withdrawals" DROP CONSTRAINT "Withdrawals_clerkId_fkey";

-- DropTable
DROP TABLE "Deposits";

-- DropTable
DROP TABLE "Transactions";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Withdrawals";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "trading_bonus" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "remarks" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartData" ADD CONSTRAINT "ChartData_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
