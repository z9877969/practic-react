import PropTypes from "prop-types";

const SecondaryTitle = ({ title = "" }) => {
  return (
    title && (
      <h2 style={{ backgroundColor: "red", margin: 0, marginBottom: "25px" }}>
        {title}
      </h2>
    )
  );
};

export default SecondaryTitle;

SecondaryTitle.propTypes = {
  title: PropTypes.string,
};
