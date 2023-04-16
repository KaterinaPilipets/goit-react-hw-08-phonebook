import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Layout, Section } from './Layout/Layout.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import Loader from './Loader/Loader';
import { selectLoader, selectError } from 'redux/selectors';
export const App = () => {
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
      <Loader />
      {/* {isLoading && !error && <Loader />} */}
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Layout>
  );
};
