import css from './AddContainer.module.css';

function AddContainer({ children }) {
  return <div className={css.container}>{children}</div>;
}

export default AddContainer;
