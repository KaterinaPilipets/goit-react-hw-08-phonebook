import { Button, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handlerDelete = () => {
    dispatch(deleteContact({ id }));
  };
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handlerDelete}>Delete</Button>
      {/* <Button onClick={dispatch(deleteContact({ id }))}>Delete</Button> */}
    </ListItem>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
