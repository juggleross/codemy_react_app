import React from 'react';
import styles from './Layout.module.sass';
import classNames from 'classnames';

const Layout = props =>
  <div id='Layout' className={classNames(styles.layout)}>
    <div className={classNames("pure-menu", "pure-menu-horizontal", "pure-menu-fixed", styles.mainNav)}>
      <a href="#" className={classNames("pure-menu-heading", styles.heading)}>BRAND</a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <a href="#" className={classNames(styles.links, "pure-menu-link")}>Sign In</a>
        </li>
      </ul>
    </div>
    {props.children}
  </div>

export default Layout;
