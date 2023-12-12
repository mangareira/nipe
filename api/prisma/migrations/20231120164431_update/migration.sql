-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_authorId_fkey";

-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
