import React from 'react';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return(
      <div id='helloReact' className='pure-g'>
        <div className="pure-u-1-3"><p>Thirds</p></div>
        <div className="pure-u-1-3"><p>Thirds</p></div>
        <div className="pure-u-1-3"><p>Thirds</p></div>
      </div>
    )
  }
}

export default Layout;
