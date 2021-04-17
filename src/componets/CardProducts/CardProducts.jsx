import PropTypes from "prop-types";
import CardProductsItem from "../CardProductsItem/CardProductsItem";
import Section from "../share/Section/Section";
import List from "../share/List/List";
import Container from "../share/Container/Container";

const CardProducts = ({ products }) => {
  //   products = [];
  return (
    // <Section title="CardProducts">
    <Section>
      <Container>
        {products.length > 0 && (
          <List>
            {products.map(({ id, ...rest }) => {
              return <CardProductsItem key={id} {...rest} />;
            })}
          </List>
        )}
      </Container>
    </Section>
  );
};

export default CardProducts;

CardProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
