import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'contacts',
})
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Идентификатор контакта',
    name: 'contact_id',
  })
  readonly contactId: string;

  @Column('varchar', {
    comment: 'Имя контакта',
    nullable: false,
    length: 20,
  })
  name: string;

  @Column('varchar', {
    comment: 'Номер телефона контакта',
    nullable: false,
    length: 20,
  })
  phone: string;

  @Column('varchar', {
    comment: 'E-mail контакта',
    nullable: false,
    length: 20,
  })
  email: string;

  @Column('varchar', {
    comment: 'Теги контакта',
    nullable: false,
    array: true,
    default: {},
  })
  tags?: string[];

  @Column('date', {
    comment: 'Пометка даты последнего взаимодействия',
    nullable: true,
  })
  lastInteraction?: Date;
}
