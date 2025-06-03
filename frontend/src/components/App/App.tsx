import { useEffect, useState } from 'react';
import { getAllContactsHandler, getContactByIdHandler, type TContact } from '../../utils/Api';
import Table from '../Table/Table';
import Modal from '../Modal/Modal';

const App = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [modaldataState, setModaldataState] = useState<TContact | object>({});
  const [contacts, setContacts] = useState<TContact[]>([]);
  const openModalHandler = async (id: string): void => {
    const data = await getContactByIdHandler(id);
    setModaldataState(data);
    setModalState(!modalState);
  }
  useEffect(() => {
    const getData = async () => {
      const response = await getAllContactsHandler();
      setContacts(response);
    };
    getData();
  }, []);
  return (
    <>
      {
        (modalState)
          ? <Modal data={modaldataState} closeModal={() => {setModalState(!modalState)}} />
          : <Table items={contacts} openModal={openModalHandler} />
      }
    </>
  );
}

export default App