import { observable, action } from 'mobx';
import Api from '../../lib/helpers/api/index';

class Contacts {
  path = '/contacts';

  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await Api.get('/contacts');
    const status = await response.status;

    if(status === 200) {
      const response_with_data = await response.json();
      this.all = response_with_data.data;
    }
  }

  @action async add(data) {
    const existing = this.all;
    this.all = existing.concat(data);

    const response = Api.post('/contacts', data);
    const status = await response.status;

    if(status === 201) {
      const response_with_data = await response.json();

      this.all = existing.concat(response_with_data);
    }
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(elem => elem.id === parseInt(contactId))[0]
    );
  }

  @action async remove(contactId) {
    this.isLoading = true;

    const response = await Api.delete(`${this.path}/${contactId}`);
    const status = await response.status;
    const existing = this.all;

    if(status === 200) {
      this.isLoading = false;
      this.all = existing.filter(elem => elem.id !== parseInt(contactId));
    }
  }
}

export default new Contacts();
