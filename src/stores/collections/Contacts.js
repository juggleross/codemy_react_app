import { observable, action } from 'mobx';
import Api from '../../lib/helpers/api/index';

class Contacts {
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

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    //
    // const options = {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify(data)
    // };

    const request = Api.post('/contacts', data);
    const response = await fetch(request);
    const status = await response.status;

    if(status === 201) {
      const response_with_data = await response.json();
      this.all = this.all.concat(response_with_data.data);
    }
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(elem => elem.id === parseInt(contactId))[0]
    );
  }

  @action remove(contactId) {
    const existing = this.all;
    this.all = existing.filter(elem => elem.id !== parseInt(contactId));
  }
}

export default new Contacts();
