import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1748876917132 implements MigrationInterface {
  name = 'Initial1748876917132';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "contacts" ("contact_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "email" character varying(20) NOT NULL, "tags" character varying array NOT NULL DEFAULT '{}', "lastInteraction" date, CONSTRAINT "PK_b85c417d6af2e06ff6ba8c8234d" PRIMARY KEY ("contact_id")); COMMENT ON COLUMN "contacts"."contact_id" IS 'Идентификатор контакта'; COMMENT ON COLUMN "contacts"."name" IS 'Имя контакта'; COMMENT ON COLUMN "contacts"."phone" IS 'Номер телефона контакта'; COMMENT ON COLUMN "contacts"."email" IS 'E-mail контакта'; COMMENT ON COLUMN "contacts"."tags" IS 'Теги контакта'; COMMENT ON COLUMN "contacts"."lastInteraction" IS 'Пометка даты последнего взаимодействия'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "contacts"`);
  }
}
