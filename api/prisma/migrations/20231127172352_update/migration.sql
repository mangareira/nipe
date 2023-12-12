-- CreateTable
CREATE TABLE "ProjectsDis" (
    "id" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "profId" TEXT,
    "dicenteId" TEXT,

    CONSTRAINT "ProjectsDis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsGrup" (
    "id" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "profId" TEXT,
    "gruPesqId" TEXT,

    CONSTRAINT "ProjectsGrup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectsDis" ADD CONSTRAINT "ProjectsDis_dicenteId_fkey" FOREIGN KEY ("dicenteId") REFERENCES "Dicente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsGrup" ADD CONSTRAINT "ProjectsGrup_gruPesqId_fkey" FOREIGN KEY ("gruPesqId") REFERENCES "GruPesq"("id") ON DELETE SET NULL ON UPDATE CASCADE;
