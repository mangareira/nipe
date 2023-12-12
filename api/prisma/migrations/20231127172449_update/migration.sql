/*
  Warnings:

  - You are about to drop the column `profId` on the `ProjectsDis` table. All the data in the column will be lost.
  - You are about to drop the column `profId` on the `ProjectsGrup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProjectsDis" DROP COLUMN "profId";

-- AlterTable
ALTER TABLE "ProjectsGrup" DROP COLUMN "profId";
