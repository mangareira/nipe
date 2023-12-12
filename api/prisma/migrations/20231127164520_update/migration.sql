/*
  Warnings:

  - The primary key for the `Arquivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Dicente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GruPesq` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Prof` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Projects` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Arquivo" DROP CONSTRAINT "Arquivo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Arquivo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Arquivo_id_seq";

-- AlterTable
ALTER TABLE "Dicente" DROP CONSTRAINT "Dicente_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dicente_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Dicente_id_seq";

-- AlterTable
ALTER TABLE "GruPesq" DROP CONSTRAINT "GruPesq_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "GruPesq_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "GruPesq_id_seq";

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Image_id_seq";

-- AlterTable
ALTER TABLE "Prof" DROP CONSTRAINT "Prof_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Prof_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Prof_id_seq";

-- AlterTable
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Projects_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Projects_id_seq";
