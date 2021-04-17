import PropTypes from "prop-types";
import scss from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={scss.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
