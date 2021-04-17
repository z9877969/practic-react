import PropTypes from "prop-types";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";

const Section = ({ title, children }) => {
  return (
    <section>
      <SecondaryTitle title={title} />
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
