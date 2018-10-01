import React from 'react';
import Contact from './Contact';
import data from './data'

class Show extends React.Component {
  componentWillMount() {
    this.setState({
      contact: data.filter(elem => elem.id === parseInt(this.props.params.contactId))[0]
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.contact.name}</h1>
      </div>
    )
  }
}
export default Show;
