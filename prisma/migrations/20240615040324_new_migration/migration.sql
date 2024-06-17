/*
  Warnings:

  - You are about to drop the `SuperUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_supperUserId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "avaliable_balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "profit" SET DEFAULT 0;

-- DropTable
DROP TABLE "SuperUser";
