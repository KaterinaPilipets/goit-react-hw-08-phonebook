import { List } from './ContactList.styled';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
}
export default ContactList;
