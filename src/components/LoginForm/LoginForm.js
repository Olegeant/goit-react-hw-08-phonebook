import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/password.svg';

import Button from '../Button/Button';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
