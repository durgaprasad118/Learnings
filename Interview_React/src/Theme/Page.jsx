import Button from "./Button";
import useTheme from "./ThemeContext";
const Page = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-[98vh] w-full ${theme == "dark" ? "bg-gray-700" : "bg-white"} `}
    >
      <Button />
    </div>
  );
};

export default Page;
