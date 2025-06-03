import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ContactEntity } from './entities/contact.entity';

export class ContactsRepository {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactsRepository: Repository<ContactEntity>,
  ) {}

  async createContact<T extends DeepPartial<ContactEntity>>(
    entity: T,
  ): Promise<ContactEntity> {
    return this.contactsRepository.save(entity);
  }

  async findAllContacts(): Promise<ContactEntity[]> {
    return this.contactsRepository.find({});
  }

  async findContactById(id: string): Promise<ContactEntity> {
    return this.contactsRepository.findOneBy({ contactId: id });
  }

  async putContact<T extends DeepPartial<ContactEntity>>(
    id: string,
    entity: T,
  ): Promise<UpdateResult> {
    return this.contactsRepository.update(id, entity);
  }

  async deleteContact(id: string): Promise<DeleteResult> {
    return this.contactsRepository.delete(id);
  }
}
