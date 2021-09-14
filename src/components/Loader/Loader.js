import Spinner from 'react-loader-spinner';
import PropTypes from 'prop-types';

import styles from './Loader.module.css';

export default function Loader({ type, color, height, width }) {
  return (
    <Spinner
      className={styles.Loader}
      type={type}
      color={color}
      height={height}
      width={width}
    />
  );
}

Loader.defaultProps = {
  type: 'ThreeDots',
  color: '#606dbc',
  height: 180,
  width: 180,
};

Loader.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
