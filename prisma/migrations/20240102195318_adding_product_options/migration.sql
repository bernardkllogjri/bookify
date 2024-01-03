/*
  Warnings:

  - You are about to drop the column `metadata` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `metadata`,
    ADD COLUMN `options` JSON NULL;
