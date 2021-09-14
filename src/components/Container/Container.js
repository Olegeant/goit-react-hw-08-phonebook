import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.css';

const Container = function ({ unframe, children }) {
  return (
    <div className={`${styles.container} ${unframe ? styles.unframed : ''}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
