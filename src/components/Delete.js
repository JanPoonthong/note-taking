import { FaTimes } from "react-icons/fa";

const Delete = ({ task, setTask }) => {
  return (
    <>
      <FaTimes
        onClick={() => remove(task, setTask)}
        style={{ color: "#d946ef" }}
      />
    </>
  );
};

const remove = (task, setTask) => {
  setTask(task.filter((tasks) => tasks.id !== task.id));
};

export default Delete;
