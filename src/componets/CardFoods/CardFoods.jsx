import PropTypes from "prop-types";
import Section from "../share/Section/Section";
import List from "../share//List/List";
import CardFoodItem from "../CardFoodItem/CardFoodItem";

const CardFoods = ({ foods }) => {

    const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Section>
      <List>
        {foods.map(({ id, ...rest }) => (
          <CardFoodItem key={id} {...rest} />
        ))}
      </List>
    </Section>
  );
};

export default CardFoods;

CardFoods.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
