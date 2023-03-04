import { Button, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
export function Contact({ id, name, number, onDelete }) {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </ListItem>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
