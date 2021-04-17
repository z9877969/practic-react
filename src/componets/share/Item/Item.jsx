import css from "./Item.module.css";

const Item = ({ children, style }) => {
  return (
    <li style={style ? style : null} className={css.item}>
      {children}
    </li>
  );
};

export default Item;
