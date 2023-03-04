import { List } from './ContactList.styled';
import { Contact } from './Contact';
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
