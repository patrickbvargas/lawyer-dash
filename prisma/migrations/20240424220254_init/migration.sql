-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "contract_legal_area" AS ENUM ('SOCIAL_SECURITY', 'CIVIL', 'FAMILY', 'LABOR', 'OTHER');

-- CreateEnum
CREATE TYPE "revenue_type" AS ENUM ('ADMINISTRATIVE', 'JUDICIAL', 'COMPLIANCE');

-- CreateEnum
CREATE TYPE "lawyer_assignment" AS ENUM ('RESPONSIBLE', 'RECOMMENDED', 'RECOMMENDING');

-- CreateEnum
CREATE TYPE "client_type" AS ENUM ('INDIVIDUAL', 'CORPORATE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'OTHER');

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "mobile_phone" TEXT,
    "type" "client_type" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_individuals" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "marital_status" "MaritalStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_individuals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_corporates" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_corporates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lawyers" (
    "id" TEXT NOT NULL,
    "oab_number" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "remuneration_percent" DOUBLE PRECISION NOT NULL,
    "role" "role" NOT NULL DEFAULT 'USER',
    "hashed_password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lawyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "legal_area" "contract_legal_area" NOT NULL,
    "fee_percent" DOUBLE PRECISION NOT NULL,
    "observation" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contract_lawyer" (
    "id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "lawyer_id" TEXT NOT NULL,
    "lawyer_assignment" "lawyer_assignment" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contract_lawyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenues" (
    "id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "type" "revenue_type" NOT NULL,
    "total_value" DOUBLE PRECISION NOT NULL,
    "entry_value" DOUBLE PRECISION NOT NULL,
    "installments_total" INTEGER NOT NULL,
    "installments_paid" INTEGER NOT NULL,
    "payment_start_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "revenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fees" (
    "id" TEXT NOT NULL,
    "revenue_id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "installment_number" INTEGER NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "remunerations" (
    "id" TEXT NOT NULL,
    "fee_id" TEXT NOT NULL,
    "lawyer_id" TEXT NOT NULL,
    "remuneration_percent" DOUBLE PRECISION NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "remunerations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "client_individuals_client_id_key" ON "client_individuals"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_individuals_cpf_key" ON "client_individuals"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "client_corporates_client_id_key" ON "client_corporates"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_corporates_cnpj_key" ON "client_corporates"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_oab_number_key" ON "lawyers"("oab_number");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_identification_key" ON "contracts"("identification");

-- CreateIndex
CREATE UNIQUE INDEX "contract_lawyer_contract_id_lawyer_id_key" ON "contract_lawyer"("contract_id", "lawyer_id");

-- AddForeignKey
ALTER TABLE "client_individuals" ADD CONSTRAINT "client_individuals_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_corporates" ADD CONSTRAINT "client_corporates_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract_lawyer" ADD CONSTRAINT "contract_lawyer_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract_lawyer" ADD CONSTRAINT "contract_lawyer_lawyer_id_fkey" FOREIGN KEY ("lawyer_id") REFERENCES "lawyers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fees" ADD CONSTRAINT "fees_revenue_id_fkey" FOREIGN KEY ("revenue_id") REFERENCES "revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "remunerations" ADD CONSTRAINT "remunerations_fee_id_fkey" FOREIGN KEY ("fee_id") REFERENCES "fees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "remunerations" ADD CONSTRAINT "remunerations_lawyer_id_fkey" FOREIGN KEY ("lawyer_id") REFERENCES "lawyers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
