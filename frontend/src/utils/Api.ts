const BASE_URL = 'http://localhost:3000'

export type TContact = {
  contactId: string;
  name: string;
  phone: string;
  email: string;
  tags?: string[];
  lastInteraction?: Date;
};

const handleResponse = (response: Response): Promise<TContact[]> => {
    if(response.ok){
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

const getAllContactsApi = () => fetch(`${BASE_URL}/contacts`);

const getContactById = (id: string) => fetch(`${BASE_URL}/contacts/${id}`);

export const getAllContactsHandler = async (): Promise<TContact[]> => {
  return getAllContactsApi().then(handleResponse);
}

export const getContactByIdHandler = async (id: string): Promise<TContact> => {
  return getContactById(id).then(handleResponse);
}