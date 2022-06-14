import css from './Style.module.css';

function Button({ children, clas, klase }) {
  console.log('klase', klase);
  return (
    <button className={clas === 'reverse' ? `${css.reverseBtn} ` : `${css.mainColorBtn} ${klase}`}>
      {children}
    </button>
  );
}

export default Button;
