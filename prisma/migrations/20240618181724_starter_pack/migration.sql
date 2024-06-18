-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkId" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "revenue" INTEGER NOT NULL DEFAULT 0,
    "profit" INTEGER NOT NULL DEFAULT 0,
    "trading_bonus" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Deposits" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "prove" TEXT NOT NULL,
    CONSTRAINT "Deposits_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Users" ("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Withdrawals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    CONSTRAINT "Withdrawals_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Users" ("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "remarks" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "clerkId" TEXT NOT NULL,
    CONSTRAINT "Transactions_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Users" ("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChartData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profit" INTEGER NOT NULL,
    "clerkId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    CONSTRAINT "ChartData_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "Users" ("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_clerkId_key" ON "Users"("clerkId");
