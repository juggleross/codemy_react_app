import { observable, action } from 'mobx';
import Api from '../../lib/helpers/api/index';

class User {

  @observable isLoading = false;

  createSession(email, password) {
    alert(email)
    alert(password)
  }
}

export default new User();
