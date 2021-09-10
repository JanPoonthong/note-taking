import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Box = ({ title }) => {
  const addNote = () => {
    alert("click");
  };

  return (
    <div className={boxStyle}>
      <h1>{title}</h1>
      <div>
        <Button onClick={addNote} />
      </div>
    </div>
  );
};

const boxStyle =
  "rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white";

Box.defaultProps = {
  title: "Task Tracker",
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Box;
