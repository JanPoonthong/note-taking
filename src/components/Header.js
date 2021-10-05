import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Header = ({ title }) => {
  return (
    <header className={headingStyle}>
      <Box title={title} button={true} />
    </header>
  );
};

Header.defaultProps = {
  title: "Note Taking",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = "text-center font-bold my-6";

export default Header;
