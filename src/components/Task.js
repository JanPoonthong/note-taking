import { useState } from "react";
import Box from "./Box";

const Task = () => {
  const [task, setTask] = useState([
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
  ]);

  return (
    <div>
      {task.map((task) => (
        // TODO(jan): Need to pass task and setTask as one function argument
        <Box key={task.id} title={task.text} task={task} setTask={setTask} />
      ))}
    </div>
  );
};

export default Task;
