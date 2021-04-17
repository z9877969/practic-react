import PropTypes, { node, string } from "prop-types";

const Button = ({ title, type = "button", handler }) => {
  // const click = (id) => handler(id);
  return (
    <button onClick={handler} type={type}>
      {title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.oneOfType([string, node]).isRequired,
  type: PropTypes.string,
  handler: PropTypes.func,
};
