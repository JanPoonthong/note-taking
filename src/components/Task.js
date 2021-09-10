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
      <Box
        title={task.map((task) => (
          <h3>{task.text}</h3>
        ))}
      />
    </div>
  );
};

export default Task;
