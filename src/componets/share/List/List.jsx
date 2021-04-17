import css from "./List.module.css";

const List = ({ children, style }) => {
  
  return (
    <ul style={style ? style : null} className={css.list}>
      {children}
    </ul>
  );
};

export default List;
