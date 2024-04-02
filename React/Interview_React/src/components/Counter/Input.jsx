import { useState } from "react";
import { useDispatch } from "react-redux";
import { inpt } from "../../redux/counterSlice";
const Input = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border px-10 py-2  rounded"
      />

      <button
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 "
        onClick={() => {
          dispatch(inpt(value));
          setValue(0);
        }}
      >
        Add amount
      </button>
    </div>
  );
};
export default Input;
