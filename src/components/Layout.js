import React from 'react';
import './Layout.css';
import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: data
    })
  }

  addContact = (e) => {
    const contacts = this.state.contacts;
    const contactId = contacts[contacts.length - 1].id + 1;

    e.preventDefault();

    this.setState({
      contacts: contacts.concat({id: contactId,
                                 name: `contact ${contactId}`,
                                 email: `${contactId}@gmail.com`})
    })
  }

  contactForm = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form">
          <fieldset>
            <legend>A compact inline form </legend>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />

            <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>

  render() {
    return(
      <div id='helloReact'>
        { this.contactForm() }
        <a href="#" className='pure-button' onClick={this.addContact}>Add me</a>
        <div  className='pure-g'>
          { this.state.contacts.map(info =>
            <Contact key={info.id} {...info}/>
          )}
        </div>
      </div>
    )
  }
}

export default Layout;
