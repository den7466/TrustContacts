import { DataSource } from 'typeorm';
import migrations from '../database/migrations';
import * as dotenv from 'dotenv';
import { ContactEntity } from '../contacts/entities/contact.entity';

const ENV_FILE = '.env';

dotenv.config({ path: ENV_FILE });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: [ContactEntity],
  migrations,
  migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  migrationsTableName: process.env.DB_MIGRATIONS_TABLE_NAME,
});
