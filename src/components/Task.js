import Box from "./Box";

const Task = ({ task }) => {
  return (
    <div>
      {task.map((task) => (
        <Box key={task.id} title={task.text} />
      ))}
    </div>
  );
};

export default Task;
