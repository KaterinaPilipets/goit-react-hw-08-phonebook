import { List } from './ContactList.styled';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
export function ContactList({ list, onDelete }) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}
Contact.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
