/*
  Warnings:

  - Added the required column `categoryId` to the `Giochi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Giochi` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Giochi` ADD CONSTRAINT `Giochi_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
