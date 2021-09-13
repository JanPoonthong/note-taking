import { FaTimes } from "react-icons/fa";

const Delete = ({ task, setTasks }) => {
  return (
    <>
      <FaTimes
        onClick={() => remove(task, setTasks)}
        style={{ color: "#d946ef" }}
      />
    </>
  );
};

const remove = (task, setTasks) => {
  setTasks((old_task) => {
    return old_task.filter((current_task) => task.id !== current_task.id);
  });
};

export default Delete;
