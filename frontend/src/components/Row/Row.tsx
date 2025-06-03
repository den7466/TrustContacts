import type { RowProps } from './Row.types';

const Row = (props: RowProps) => {
    const { contactId, name, phone, email, tags, lastInteraction, openModal } = props;
    return (
      <div key={contactId} className={'table__row'}>
        <span>{name}</span>
        <span>{phone}</span>
        <span>{email}</span>
        <span>{tags}</span>
        <span>{lastInteraction?.toString()}</span>
        <span>
          <button onClick={() => openModal(contactId)}>Редактировать</button>
          <button>Удалить</button>
        </span>
      </div>
    );
}

export default Row;