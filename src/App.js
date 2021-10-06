import { useState } from "react";

import Header from "./components/Header";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
  ]);

  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
