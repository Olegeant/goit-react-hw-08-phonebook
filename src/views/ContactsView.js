import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors, contactsOperations } from '../redux/contacts';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from '../components/Section/Section';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Loader from '../components/Loader/Loader';

export default function ContactsView() {
  const isSmthInPhonebook = useSelector(
    contactsSelectors.checkIfSmthInPhonebook,
  );
  const isLoading = useSelector(contactsSelectors.checkIfIsLoading);
  const error = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;

    toast.error(error.message);
  }, [error]);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>

        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>

        {isSmthInPhonebook ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>Phonebook is empty</p>
        )}
      </Section>

      {isLoading && <Loader />}
    </>
  );
}
