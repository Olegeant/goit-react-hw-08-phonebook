import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

import ContactListItem from '../ContactListItem/ContactListItem';

import styles from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoading = useSelector(contactsSelectors.checkIfIsLoading);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    if (isLoading) return;

    dispatch(contactsOperations.deleteContact(contactId));
  };

  return filteredContacts.length ? (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.notification}>No contact found</p>
  );
}
