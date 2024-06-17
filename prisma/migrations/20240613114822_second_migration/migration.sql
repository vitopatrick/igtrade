/*
  Warnings:

  - You are about to drop the column `income` on the `Trades` table. All the data in the column will be lost.
  - Added the required column `profit` to the `Trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avaliable_balance` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balance` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profit` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trades" DROP COLUMN "income",
ADD COLUMN     "profit" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "avaliable_balance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "profit" DOUBLE PRECISION NOT NULL;
