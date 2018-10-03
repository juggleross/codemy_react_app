import React from 'react';
import styles from './New.module.sass';

class New extends React.Component {
  render() {
    return (
      <div className={styles.signInForm}>
        <form action="submit" className='pure-form pure-form-stacked'>
          <fieldset>
            <label>Email</label>
            <input type="email" placeholder='email' className='pure-input-1'/>
            <label htmlFor="">Password</label>
            <input type="password" className='pure-input-1'/>
            <button className={`pure-button pure-input-1 ${styles.sigInButton}`}>Sign in</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default New;
