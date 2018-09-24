import React from 'react';
import './Layout.css';

const data = [
  { name: 'Vlad', email: 'vlad@tut.by'},
  { name: 'Vlad2', email: 'vlad2@tut.by'},
  { name: 'Vlad3', email: 'vlad3@tut.by'}
];

const Contact = (props) =>
  <div className="pure-u-1-3">
    <h1>{props.name}</h1>
    <p>{props.email}</p>
  </div>;

class Layout extends React.Component {
  render() {
    return(
      <div id='helloReact' className='pure-g'>
        { data.map(info =>
          <Contact {...info}/>
        )}
      </div>
    )
  }
}

export default Layout;
