import { useState } from "react";
import Box from "./Box";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Task 0",
      isDeleted: false,
    },

    {
      id: 1,
      text: "Task 1",
      isDeleted: false,
    },

    {
      id: 2,
      text: "Task 2",
      isDeleted: false,
    },
  ]);

  return (
    <div className="notes">
      {tasks.map((task) => (
        // TODO(jan): Need to pass task and setTask as one function argument
        <Box
          key={task.id}
          isDeleted={task.isDeleted}
          title={task.text}
          task={task}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default Task;
