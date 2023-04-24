import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Section } from 'components//Layout/Layout.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';
import { Layout } from 'components/Layout/Layout.style';
import { selectLoader, selectError } from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';
function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <Loader />}
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Layout>
  );
}
export default Contacts;
