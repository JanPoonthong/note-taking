import Box from "./Box";

const Header = ({ tasks, setTasks }) => {
  return (
    <header className={headingStyle}>
      <Box
        title={tasks.text}
        button={true}
        task={tasks}
        setTasks={setTasks}
        isDeleted={tasks.isDeleted}
      />
    </header>
  );
};

const headingStyle = "text-center font-bold my-6";

export default Header;
