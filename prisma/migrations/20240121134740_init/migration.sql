/*
  Warnings:

  - You are about to drop the column `number` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_number_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "number",
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "users_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
