import PropTypes from "prop-types";
import css from "./List.module.scss";

const List = ({ children }) => {
  return <ul className={`${css.list} ${css.container}`}>{children}</ul>;
};

export default List;

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node.isRequired),
};
