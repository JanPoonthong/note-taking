import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";

const App = () => {
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
    <>
      <Header />
      <Task task={task} />
    </>
  );
};

export default App;
