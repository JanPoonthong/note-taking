import Box from "./Box";

const Header = ({ tasks, setTasks }) => {
  return (
    <header className={headingStyle}>
      <Box button={true} task={tasks} setTasks={setTasks} />
    </header>
  );
};

const headingStyle = "text-center font-bold my-6";

export default Header;
