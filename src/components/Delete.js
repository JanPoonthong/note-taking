import { FaTimes } from "react-icons/fa";

const Delete = ({ task, setTasks, isDeleted }) => {
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
  task.isDeleted = true;
  setTasks((old_task) => {
    return old_task.filter((current_task) => task.id !== current_task.id);
  });
};

export default Delete;
