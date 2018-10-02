import React from 'react';
import Contact from './Contact';
import { observer } from 'mobx-react';
// import data from './data'

@observer(['contacts'])
class Show extends React.Component {
  componentWillMount() {
    const contact = this.props.contacts.find(this.props.params.contactId);
    this.setState({ contact})
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
