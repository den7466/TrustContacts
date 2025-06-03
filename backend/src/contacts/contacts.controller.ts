import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { AuthGuard } from './contacts-auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.contactsService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  put(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.put(id, updateContactDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
