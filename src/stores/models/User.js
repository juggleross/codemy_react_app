import { observable, action } from 'mobx';
import { browserHistory } from 'react-router';
import Api from '../../lib/helpers/api/index';

class User {

  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if(status && email) {
      this.email = email;
    }
  }

  async createSession(email, password) {
    this.setIsLoading(true);

    const response = await Api.post('/sessions', { email, password });

    const status = await response.status;

    if(status === 201) {
      const response_with_data = await response.json();
      const { user } = response_with_data.data;

      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true, user.email);

      browserHistory.push('/');
    } else {
      alert('unauthorize')
    }
  }
}

export default new User();
