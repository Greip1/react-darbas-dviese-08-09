import css from './Style.module.css';

function Button({ children, clas }) {
  return (
    <button className={clas === 'reverse' ? css.reverseBtn : css.mainColorBtn}>
      {children}
    </button>
  );
}

export default Button;
