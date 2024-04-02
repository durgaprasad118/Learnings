import { useNavigate } from "react-router-dom";

const CHnage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>change page</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700"
      >
        Go to home page
      </button>
    </div>
  );
};

export default CHnage;
