import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ContactsModule, ConfigModule.forRoot(), DatabaseModule],
})
export class AppModule {}
