/*
  Warnings:

  - Added the required column `password` to the `Dicente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `GruPesq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Prof` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dicente" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GruPesq" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Prof" ADD COLUMN     "password" TEXT NOT NULL;
