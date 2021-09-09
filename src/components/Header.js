import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Header = ({ title }) => {
  return (
    <header className={headingStyle}>
      <Box title={title} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = "text-center text-6xl font-bold my-6";

export default Header;
