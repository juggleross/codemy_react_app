import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './Layout.module.sass';

const Guest = () =>
  <ul className="pure-menu-list">
    <li className="pure-menu-item">
      <Link to='/users/sign_in' className={classNames(styles.links, "pure-menu-link")}>Sign In</Link>
    </li>
  </ul>

export default Guest;
