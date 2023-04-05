import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Layout, Section } from './Layout/Layout.style';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Layout>
  );
};
