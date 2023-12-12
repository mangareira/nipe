/*
  Warnings:

  - You are about to drop the column `tema` on the `GruPesq` table. All the data in the column will be lost.
  - Added the required column `nameGrup` to the `GruPesq` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GruPesq" DROP COLUMN "tema",
ADD COLUMN     "nameGrup" TEXT NOT NULL;
