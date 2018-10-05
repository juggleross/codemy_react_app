import React from 'react';
import styles from './Layout.module.sass';
import classNames from 'classnames';

import { observer, inject } from 'mobx-react';

import { Link } from 'react-router';
import Guest from './Guest';
import Member from './Member';


@inject('user') @observer
class Application extends React.Component {
  guestOrMember() {
    const { user } = this.props;

    if(user.signedIn) {
      return <Member></Member>
    }

    return <Guest></Guest>
  }

  render() {
    return (
      <div id='Layout' className={classNames(styles.layout)}>
        <div className={classNames("pure-menu", "pure-menu-horizontal", "pure-menu-fixed", styles.mainNav)}>
          <Link to='/' className={classNames("pure-menu-heading", styles.heading)}>BRAND</Link>
          {this.guestOrMember()}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Application;
