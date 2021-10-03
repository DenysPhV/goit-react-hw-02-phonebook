import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section';
import Form from './components/Form';
import Contact from './components/Contact';
import ContactsFilter from './components/Contact/ContactsFilter';

import arrContacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts: arrContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const alert = 'is already in contacts';

    contacts.find((contact) => contact.name === name)
      ? alert(`${name} ${alert}`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`${number} ${alert}`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = (e) => {
    this.state({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase;

    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    // const visibleContacts = this.filterContacts();
    return (
      <>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <ContactsFilter value={filter} onChange={this.changeFilter} />
          <Contact contacts={contacts} />
        </Section>
      </>
    );
  }
}
export default App;
