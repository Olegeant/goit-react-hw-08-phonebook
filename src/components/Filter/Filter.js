import { useSelector, useDispatch } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';
import { contactsOperations } from '../../redux/contacts';

import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onSearch = evt =>
    dispatch(contactsOperations.setFilter(evt.target.value));

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="name" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.filter}
        value={filter}
        onChange={onSearch}
      />
    </div>
  );
}
