import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: 'Vlad', email: 'vlad@tut.by'},
    { id: 2, name: 'Vlad2', email: 'vlad2@tut.by'},
    { id: 3, name: 'Vlad3', email: 'vlad3@tut.by'}
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }

  @action find(contactId) {
    return (
      this.all.slice().filter(elem => elem.id === parseInt(contactId))[0]
    );
  }
}

export default new Contacts();
