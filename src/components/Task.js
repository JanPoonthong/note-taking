import Box from "./Box";

const Task = ({ tasks, setTasks }) => {
  console.log(tasks);
  return (
    <div className="notes">
      {tasks.map((task) => (
        <Box
          key={task.id}
          title={task.text}
          button={false}
          task={task}
          setTasks={setTasks}
          isDeleted={task.isDeleted}
        />
      ))}
    </div>
  );
};

export default Task;
