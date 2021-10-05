import { Component } from 'react';
import shortid from 'shortid';

import Section from './components/Section';
import Form from './components/Form';
import { Contact, ContactsFilter } from './components/Contact';

import arrContacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: arrContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const alertString = 'is already in contacts';

    contacts.find((contact) => contact.name === name)
      ? alert(`${name} ${alertString}`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    // const { contacts } = this.state;
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <ContactsFilter value={filter} onChange={this.changeFilter} />
          <Contact contacts={visibleContacts} onDelete={this.removeContact} />
        </Section>
      </>
    );
  }
}
export default App;
