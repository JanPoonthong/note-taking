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
    return old_task.map((t) =>
      t.id === task.id ? { ...task, isDeleted: true } : t
    );
  });
};

export default Delete;
