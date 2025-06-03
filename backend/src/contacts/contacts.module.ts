import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactsRepository } from './contacts.repository';
import { ContactEntity } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './contacts-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity]), ConfigModule],
  controllers: [ContactsController],
  providers: [ContactsService, ContactsRepository, AuthGuard],
})
export class ContactsModule {}
