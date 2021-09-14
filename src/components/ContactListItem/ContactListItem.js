import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from '../../images/close-cross.svg';

import styles from './ContactListItem.module.css';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={styles.contactListItem}>
      <p className={styles.contactMeta}>
        <span className={styles.name}>{name}</span>
        {': '}
        <span className={styles.number}>{number}</span>
      </p>
      <button type="button" className={styles.button} onClick={onDelete}>
        <CrossIcon className={styles.CrossIcon} width="12" />
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
