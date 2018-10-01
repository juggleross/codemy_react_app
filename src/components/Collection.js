import React from 'react';
import styles from './Collection.module.sass';
import Contact from './Contact';
import data from './data';

class Collection extends React.Component {
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
                                 name: this.refs.name.value,
                                 email: this.refs.email.value })
    })

    this.refs.name.value = null;
    this.refs.email.value = null;
  }

  contactForm = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form" onSubmit={this.addContact}>
          <fieldset>
            <legend>A compact inline form </legend>
            <input ref='email' type="email" placeholder="Email" />
            <input ref='name' type="text" placeholder="Name" />

            <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>

  render() {
    return(
      <div id='helloReact' className={styles.main}>
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

export default Collection;
