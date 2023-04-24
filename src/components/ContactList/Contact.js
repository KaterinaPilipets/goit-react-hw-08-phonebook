import { Button, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operation';
import { useDispatch } from 'react-redux';
function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handlerDelete}>Delete</Button>
    </ListItem>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
