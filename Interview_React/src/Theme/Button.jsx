import useTheme from "./ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="px-4 w-20 py-2 border bg-blue-500 hover:bg-blue-700"
    >
      Button
    </div>
  );
};

export default Button;
