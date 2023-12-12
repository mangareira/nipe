-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "dicenteId" TEXT,
ADD COLUMN     "gruPesqId" TEXT,
ADD COLUMN     "profId" TEXT;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_profId_fkey" FOREIGN KEY ("profId") REFERENCES "Prof"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_dicenteId_fkey" FOREIGN KEY ("dicenteId") REFERENCES "Dicente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_gruPesqId_fkey" FOREIGN KEY ("gruPesqId") REFERENCES "GruPesq"("id") ON DELETE SET NULL ON UPDATE CASCADE;
