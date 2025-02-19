/*
  Warnings:

  - The primary key for the `ExpenseByCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expenseByCategory` on the `ExpenseByCategory` table. All the data in the column will be lost.
  - The primary key for the `SalesSummary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `salesSummary` on the `SalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `totalPurchased` on the `SalesSummary` table. All the data in the column will be lost.
  - Added the required column `expenseByCategoryId` to the `ExpenseByCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesSummaryId` to the `SalesSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalValue` to the `SalesSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseByCategory" DROP CONSTRAINT "ExpenseByCategory_pkey",
DROP COLUMN "expenseByCategory",
ADD COLUMN     "expenseByCategoryId" TEXT NOT NULL,
ADD CONSTRAINT "ExpenseByCategory_pkey" PRIMARY KEY ("expenseByCategoryId");

-- AlterTable
ALTER TABLE "SalesSummary" DROP CONSTRAINT "SalesSummary_pkey",
DROP COLUMN "salesSummary",
DROP COLUMN "totalPurchased",
ADD COLUMN     "salesSummaryId" TEXT NOT NULL,
ADD COLUMN     "totalValue" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "changePercentage" DROP NOT NULL,
ADD CONSTRAINT "SalesSummary_pkey" PRIMARY KEY ("salesSummaryId");
