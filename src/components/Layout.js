import React from 'react';
import './Layout.css';
import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  render() {
    return(
      <div id='helloReact' className='pure-g'>
        { data.map(info =>
          <Contact key={info.id} {...info}/>
        )}
      </div>
    )
  }
}

export default Layout;
