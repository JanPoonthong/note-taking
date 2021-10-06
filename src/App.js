import { useState } from "react";

import Header from "./components/Header";
import Task from "./components/Task";

const App = () => {
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
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
