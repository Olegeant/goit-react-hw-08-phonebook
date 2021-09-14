import styles from './Button.module.css';

const Button = ({
  type = 'button',
  disabled = false,
  onClick = null,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${styles.submit} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
