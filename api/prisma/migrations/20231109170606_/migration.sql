-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "tema" TEXT NOT NULL,
    "resumo" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
