import type { RowProps } from '../Row/Row.types';

export type TableProps = {
  items: RowProps[];
  openModal: (id: string) => void;
};
