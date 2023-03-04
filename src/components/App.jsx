import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Layout, Section } from './Layout/Layout.style';
const startContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [...startContact],
    filter: '',
  };
  addContact = (name, number) => {
    const found = this.state.contacts.find(contact => contact.name === name);

    if (found) {
      alert(`${name} is already in contact`);
      return false;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onSearch = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Section>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.onSearch} />
          <ContactList
            list={this.getFilteredContacts()}
            onDelete={this.deleteContact}
          />
        </Section>
      </Layout>
    );
  }
}
