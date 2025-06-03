import Row from '../Row/Row';
import type { TableProps } from './Table.types';

const Table = (props: TableProps) => {
  const { items, openModal } = props;
    return (<div className={'table'}>
      {items.map((item, index) => (
                <Row
                    key={index}
                    {...item}
                    openModal={openModal}
                />
            ))}
    </div>);
}

export default Table;