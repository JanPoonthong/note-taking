import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

const Header = ({ tasks, setTasks }) => {
  return (
    <header className={headingStyle}>
      <Box
        title={tasks.text}
        button={true}
        tasks={tasks}
        setTasks={setTasks}
        isDeleted={tasks.isDeleted}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = "text-center font-bold my-6";

export default Header;
