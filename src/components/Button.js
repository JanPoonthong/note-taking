import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, styling }) => {
  return <button className={buttonStyle}>{text}</button>;
};

const buttonStyle =
  "px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

Button.defaultProps = {
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
