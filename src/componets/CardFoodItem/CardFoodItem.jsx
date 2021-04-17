import PropTypes from "prop-types";
import Item from "../share/Item/Item";

const CardFoodItem = ({ title, descr, price }) => {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Item style={{ backgroundColor: `#${bgColor}` }}>
      <img src="" alt="image" />
      <h3>{title ? title : "Name of food"}</h3>
      <p>{descr}</p>
      <p>{price}</p>
    </Item>
  );
};

export default CardFoodItem;

CardFoodItem.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
