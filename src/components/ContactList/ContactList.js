import { List } from './ContactList.styled';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
export default ContactList;
