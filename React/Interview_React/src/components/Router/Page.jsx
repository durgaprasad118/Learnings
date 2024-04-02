import { useNavigate } from "react-router-dom";
const Page = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home page</h2>
      <button
        onClick={() => {
          navigate("/c");
        }}
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700"
      >
        Go to change page
      </button>
    </div>
  );
};

export default Page;
