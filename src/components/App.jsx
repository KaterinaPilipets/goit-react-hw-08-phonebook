import React, { useState, useEffect } from 'react';
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

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    setContacts(
      JSON.parse(localStorage.getItem('contacts') ?? [...startContact])
    );
  });

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');

  //   if (savedContacts) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     this.setState({ contacts: parsedContacts });
  //     return;
  //   }
  // }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  const addContact = (name, number) => {
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

  const deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  const onSearch = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Section>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onSearch} />
        <ContactList list={getFilteredContacts()} onDelete={deleteContact} />
      </Section>
    </Layout>
  );
};
