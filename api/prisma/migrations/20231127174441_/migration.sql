/*
  Warnings:

  - You are about to drop the column `nameGrup` on the `GruPesq` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `GruPesq` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `GruPesq` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GruPesq" DROP COLUMN "nameGrup",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GruPesq_email_key" ON "GruPesq"("email");
