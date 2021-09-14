import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import Button from '../Button/Button';

import { ReactComponent as PersonIcon } from '../../images/person.svg';
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/password.svg';

import styles from './RegisterForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <label className={styles.label}>
        Name
        <PersonIcon className={styles.FieldIcon} width={20} height={20} />
        <input
          className={styles.field}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Email
        <EmailIcon className={styles.FieldIcon} width={20} height={20} />
        <input
          className={styles.field}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Password
        <PasswordIcon className={styles.FieldIcon} width={20} height={20} />
        <input
          className={styles.field}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default LoginForm;
