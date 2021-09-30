import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Delete from "./Delete";
import { Transition } from "@headlessui/react";

const Box = ({ title, button, task, isDeleting, setTasks, isDeleted }) => {
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
    let deletedStyle;
    if (isDeleted) {
      deletedStyle = "delete";
    } else {
      deletedStyle = "";
    }

    const boxStyle = `Box rounded-lg ring-1 ring-gray-900 ring-opacity-5 bg-white note ${deletedStyle}`;

    return (
      <Transition
        show={!task.isDeleted}
        enter="transition ease-in-out duration-300 transform"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        <div className={boxStyle}>
          <h2>
            {title}{" "}
            <Delete task={task} setTasks={setTasks} isDeleted={isDeleted} />
          </h2>
        </div>
      </Transition>
    );
  }
};

Box.defaultProps = {
  title: "Note Taking",
  button: false,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
};

export default Box;
