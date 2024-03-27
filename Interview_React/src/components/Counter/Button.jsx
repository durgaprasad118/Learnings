import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counterSlice";
const Button = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        // if (value === "increment") {
        //   dispatch(increment());
        // }
        // if (value === "decrement") {
        //   dispatch(decrement());
        // }
        // if (value === "reset") {
        //   dispatch(reset());
        // }

        switch (value) {
          case "increment":
            dispatch(increment());
            break;
          case "decrement":
            dispatch(decrement());
            break;
          case "reset":
            dispatch(reset());
            break;
          default:
            break;
        }
      }}
      className="px-4 py-2 border bg-blue-500 hover:bg-blue-700"
    >
      {value}
    </button>
  );
};

export default Button;
