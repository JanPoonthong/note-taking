import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

const Box = ({ title, button }) => {
  const addNote = () => {
    alert("click");
  };

  if (button) {
    const boxStyle =
      "rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 title overflow-hidden bg-white";
    return (
      <div className={boxStyle}>
        <h1>{title}</h1>
        <div>
          <Button onClick={addNote} />
        </div>
      </div>
    );
  } else {
    const boxStyle =
      "rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 notes overflow-hidden bg-white";
    return (
      <div className={boxStyle}>
        <h2>
          {title} <FaTimes />
        </h2>
      </div>
    );
  }
};

Box.defaultProps = {
  title: "Task Tracker",
  button: false,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Box;
