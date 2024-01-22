/*
  Warnings:

  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientGoogle]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_phone_key";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" DROP COLUMN "phone",
ADD COLUMN     "clientGoogle" TEXT,
ADD COLUMN     "number" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";

-- CreateIndex
CREATE UNIQUE INDEX "users_clientGoogle_key" ON "users"("clientGoogle");

-- CreateIndex
CREATE UNIQUE INDEX "users_number_key" ON "users"("number");
