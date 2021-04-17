import PropTypes from "prop-types";
import Button from "../share/Button/Button";
import css from "./CardProductsItem.module.scss";

const CardProductsItem = ({ title, price, descr, id }) => {
  const changeColor = () => Math.ceil(Math.random() * 255);
  const rgb = `rgb(${changeColor()}, ${changeColor()}, ${changeColor()})`;
  const handleClick = () => {
      console.log("object-", title);
  }
  return (
    <li className={css.container}>
      <img src="" alt="productImage" />
      <h3 style={title.includes("i") ? { color: rgb, textDecoration: "underline" } : { color: rgb }}>
        {title?.includes("i")
          ? title.toUpperCase()
          : title
          ? title
          : "SomeProduct"}
      </h3>
      <p>
        <span>{descr}</span>
        <span>{price}</span>
      </p>
      <Button title="AddToCart" handler={handleClick}/>
    </li>
  );
};

export default CardProductsItem;

CardProductsItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  descr: PropTypes.string.isRequired,
};
