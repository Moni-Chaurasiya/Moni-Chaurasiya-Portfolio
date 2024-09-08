//import React from "react";
import PropTypes from "prop-types";

function Container({ children, style, className }) {
  return (
    <div
      className={`w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} // Applying the className prop
      style={style} // Applying the style prop
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // className prop is optional
  style: PropTypes.object, // style prop is optional
};

Container.defaultProps = {
  className: "",
  style: {},
};

export default Container;
