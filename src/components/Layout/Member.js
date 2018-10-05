import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './Layout.module.sass';

@inject('user') @observer
class Member extends React.Component {
  render() {
    return(
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <Link to='/users/sign_in' className={classNames(styles.links, "pure-menu-link")}>{this.props.user.email}</Link>
        </li>
      </ul>
    )
  }
}


export default Member;
