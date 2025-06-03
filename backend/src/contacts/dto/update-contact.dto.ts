import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray, IsDate, IsString } from 'class-validator';

export class UpdateContactDto {
  @ApiProperty({
    description: 'Имя контакта',
    type: String,
  })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({
    description: 'Номер телефона контакта',
    type: String,
  })
  @IsString()
  @Expose()
  phone: string;

  @ApiProperty({
    description: 'E-mail контакта',
    type: String,
  })
  @IsString()
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Теги контакта',
    type: Array,
    required: false,
  })
  @IsArray()
  tags?: string[];

  @ApiProperty({
    description: 'Теги контакта',
    type: Date,
    required: false,
  })
  @IsDate()
  lastInteraction?: Date;
}
