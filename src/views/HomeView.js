import Section from '../components/Section/Section';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

import { ReactComponent as ListIcon } from '../images/list.svg';

const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  accent: {
    color: '#404080',
  },
};

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Section>
      <h1 style={styles.title}>
        Welcome to <span style={styles.accent}>Phonebook</span>!
        <hr />
        <ListIcon />
        {isLoggedIn ? (
          <p>Enjoy our app and wait for the new releases and new features! </p>
        ) : (
          <p>Please, log in or register to use app features </p>
        )}
      </h1>
    </Section>
  );
};

export default HomeView;
