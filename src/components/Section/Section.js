import PropTypes from 'prop-types';

import Container from '../Container/Container';

import styles from './Section.module.css';

const Section = function ({ children }) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
