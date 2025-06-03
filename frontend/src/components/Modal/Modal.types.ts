import type { TContact } from '../../utils/Api';

export type ModalProps = {
  data: TContact
  closeModal: () => void;
};