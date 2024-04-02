interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const Button = ({ children, setCount, ...props }: ButtonProps) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCount((prev) => prev + 1);
  }
  return (
    <button
      onClick={handleClick}
      className="px-4 text-white py-2 rounded bg-blue-500 hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
