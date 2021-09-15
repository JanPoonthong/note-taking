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
    return old_task.map((current_task) => {
      if (task.id === current_task.id) {
        return { ...current_task, isDeleted: true };
      } else {
        return current_task;
      }
    });
  });
};

export default Delete;
