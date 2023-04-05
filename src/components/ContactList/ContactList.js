import { List } from './ContactList.styled';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';
const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
