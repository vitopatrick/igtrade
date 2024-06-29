-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "clerkId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commodity" TEXT NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Users"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
