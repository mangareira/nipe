-- CreateTable
CREATE TABLE "GruPesq" (
    "id" SERIAL NOT NULL,
    "tema" TEXT NOT NULL,
    "nameGrup" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GruPesq_pkey" PRIMARY KEY ("id")
);
