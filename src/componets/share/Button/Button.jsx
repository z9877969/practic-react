import PropTypes from "prop-types";

const Button = ({ title, type = "button", handleClick }) => {
  return <button tytpe={type} onClick={handleClick}>{title}</button>;
};

export default Button;

Button.protoTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};
