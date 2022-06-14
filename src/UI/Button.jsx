import css from './Style.module.css';

function Button({ children, id, clas, klase, onClick }) {
  // console.log('klase', klase);
  return (
    <button
      onClick={() => onClick(id)}
      className={clas === 'reverse' ? `${css.reverseBtn} ` : `${css.mainColorBtn} ${klase}`}
    >
      {children}
    </button>
  );
}

export default Button;
