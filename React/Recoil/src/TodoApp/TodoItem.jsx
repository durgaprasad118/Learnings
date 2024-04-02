import { useNavigate } from "react-router-dom";

export const TodoItem = ({ title = "", id }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/p/${id}`);
  }
  return (
    <h1 onClick={handleClick} className="text-xl text-gray-600">
      {title}
    </h1>
  );
};
