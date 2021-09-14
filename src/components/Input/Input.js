// import styles from './Input.module.css';

// const Input = ({
//   text,
//   type = 'text',
//   name,
//   value,
//   pattern,
//   title,
//   required,
// }) => {
//   const makeLabelClass = (value, type) => {
//     return [
//       styles.label,
//       ...(isStringValid(value, pattern[type]) ? [] : [styles.invalid]),
//     ].join(' ');
//   };

//   return (
//     <label className={makeLabelClass(name, 'name')}>
//       {text}
//       {/* <PersonIcon className={styles.FieldIcon} width={20} height={20} /> */}
//       <input
//         type="text"
//         name="name"
//         value={name}
//         className={styles.field}
//         onChange={handleInputChange}
//         pattern={pattern.name}
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//       />
//     </label>
//   );
// };

// export default Input;
