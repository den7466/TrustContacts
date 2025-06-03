export type RowProps = {
  contactId: string;
  name: string;
  phone: string;
  email: string;
  tags?: string[];
  lastInteraction?: Date;
  openModal: (id: string) => void;
};