-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "profit" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "revenue" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "trading_bonus" INTEGER NOT NULL DEFAULT 0;
