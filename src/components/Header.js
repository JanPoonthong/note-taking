import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className={headingStyle}>
      <div className="rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
        <h1 style={{ display: "inline" }}>Task Tracker</h1>
        <Button />
      </div>
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
