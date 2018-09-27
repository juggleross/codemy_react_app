import React from 'react';
import './Layout.css';
import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  addContact = (e) => {
    e.preventDefault();
    alert('hello');
  }

  render() {
    return(
      <div id='helloReact'>
        <a href="#" className='pure-button' onClick={this.addContact}>Add me</a>
        <div  className='pure-g'>
          { data.map(info =>
            <Contact key={info.id} {...info}/>
          )}
        </div>
      </div>
    )
  }
}

export default Layout;
