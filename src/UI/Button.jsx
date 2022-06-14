import css from './Style.module.css';

function Button({ children, id, clas, klase, onClick }) {
  // console.log('klase', klase);
  function clickHandler() {
    // console.log('id be id', onClick);
    onClick !== undefined && onClick(id);
  }
  return (
    <button
      onClick={clickHandler}
      className={clas === 'reverse' ? `${css.reverseBtn} ` : `${css.mainColorBtn} ${klase}`}
    >
      {children}
    </button>
  );
}

export default Button;
