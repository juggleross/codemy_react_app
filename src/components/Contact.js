import React from 'react';

import { Link } from 'react-router';

import styles from './Contact.module.sass'

const Contact = (props) =>
  <div className={`${styles.contact} pure-u-1-3`}>
    <h1>
      <Link to={`contacts/${props.id}`}>
        {props.name}
      </Link>
    </h1>
    <p>{props.email}</p>
  </div>;

export default Contact;
