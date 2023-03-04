import { Button, ListItem } from './ContactList.styled';

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
