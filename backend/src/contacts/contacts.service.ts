import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './contacts.repository';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto) {
    const result =
      await this.contactsRepository.createContact(createContactDto);
    return result;
  }

  async findAll() {
    return await this.contactsRepository.findAllContacts();
  }

  async findById(id: string) {
    return await this.contactsRepository.findContactById(id);
  }

  async put(id: string, updateContactDto: UpdateContactDto) {
    return await this.contactsRepository.putContact(id, updateContactDto);
  }

  async remove(id: string) {
    return await this.contactsRepository.deleteContact(id);
  }
}
