import React from 'react';

import { Link } from 'react-router';

const Contact = (props) =>
  <div className="pure-u-1-3">
    <Link to={`contacts/${props.id}`}>
      <h1>
        {props.name}
      </h1>
    </Link>

    <p>{props.email}</p>
  </div>;

export default Contact;
