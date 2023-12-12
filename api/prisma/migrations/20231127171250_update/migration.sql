/*
  Warnings:

  - You are about to drop the column `dicenteId` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `gruPesqId` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `profId` on the `Projects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_dicenteId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_gruPesqId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_profId_fkey";

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "dicenteId",
DROP COLUMN "gruPesqId",
DROP COLUMN "profId";

-- CreateTable
CREATE TABLE "ProjectsProf" (
    "id" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "profId" TEXT,

    CONSTRAINT "ProjectsProf_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectsProf" ADD CONSTRAINT "ProjectsProf_profId_fkey" FOREIGN KEY ("profId") REFERENCES "Prof"("id") ON DELETE SET NULL ON UPDATE CASCADE;
