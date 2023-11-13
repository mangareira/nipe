-- CreateTable
CREATE TABLE "Arquivo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Arquivo_pkey" PRIMARY KEY ("id")
);
