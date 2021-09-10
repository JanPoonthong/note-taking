import Box from "./Box";

const task = [
  {
    id: 0,
    text: "Task 0",
  },

  {
    id: 1,
    text: "Task 1",
  },

  {
    id: 2,
    text: "Task 2",
  },
];

const Task = () => {
  return (
    <div>
      {task.map((task) => (
        <Box title={task.text} />
      ))}
    </div>
  );
};

export default Task;
