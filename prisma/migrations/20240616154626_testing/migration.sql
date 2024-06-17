/*
  Warnings:

  - You are about to drop the column `userId` on the `Deposits` table. All the data in the column will be lost.
  - You are about to drop the `Trades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Withdrawals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `remarks` to the `Deposits` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Deposits" DROP CONSTRAINT "Deposits_userId_fkey";

-- DropForeignKey
ALTER TABLE "Trades" DROP CONSTRAINT "Trades_userId_fkey";

-- DropForeignKey
ALTER TABLE "Withdrawals" DROP CONSTRAINT "Withdrawals_userId_fkey";

-- DropIndex
DROP INDEX "Deposits_userId_key";

-- AlterTable
ALTER TABLE "Deposits" DROP COLUMN "userId",
ADD COLUMN     "remarks" TEXT NOT NULL;

-- DropTable
DROP TABLE "Trades";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Withdrawals";

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remarks" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
