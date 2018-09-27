import React from 'react';

const Contact = (props) =>
  <div className="pure-u-1-3">
    <h1>{props.name}</h1>
    <p>{props.email}</p>
  </div>;

export default Contact;
