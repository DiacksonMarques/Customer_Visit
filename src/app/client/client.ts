export interface Client {
  id: number | null;
  name: string | null;
  phone: string | null;
  type_client: string | null;
  preferential: string | null;
  person: {
    person_name: string | null;
    person_phone: string | null;
  };
  address: {
    cep: number | null;
    number: number | null;
    complement: string | null;
    street: string | null;
    neighborhood: string | null;
    state: string | null;
  }
}
