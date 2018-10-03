import React from 'react';
import styles from './New.module.sass';
import { observer, inject } from 'mobx-react';

@inject(['user']) @observer
class New extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    const { user } = this.props;
    user.createSession(this.email.value, this.password.value)
  }

  render() {
    return (
      <div className={styles.signInForm}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <fieldset>
            <label>Email</label>
            <input ref={node => { this.email = node }} type="email" placeholder='email' className='pure-input-1'/>
            <label htmlFor="">Password</label>
            <input ref={node => { this.password = node }} type="password" className='pure-input-1'/>
            <button type='submit' className={`pure-button pure-input-1 ${styles.sigInButton}`}>Sign in</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default New;
