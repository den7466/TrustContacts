import type { ModalProps } from './Modal.types';

const Modal = (props: ModalProps) => {
  const { data, closeModal } = props;
  return (<>
    <div className={'modal'}>
      <button onClick={closeModal}>Закрыть</button>
      <form>
        <input type="text" defaultValue={data.name} />
        <input type="text" defaultValue={data.phone} />
        <input type="text" defaultValue={data.email} />
        <input type="text" defaultValue={data.tags} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  </>);
}

export default Modal;