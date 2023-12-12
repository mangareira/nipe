/*
  Warnings:

  - You are about to drop the column `description` on the `Dicente` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `GruPesq` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Prof` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dicente" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "GruPesq" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Prof" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "description";
