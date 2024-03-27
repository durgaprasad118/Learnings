import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../TodoRedux/TodoSlice";
let a = 1;
const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border px-10 py-2  rounded border-black"
      />

      <button
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 "
        onClick={() => {
          dispatch(
            addTodo({
              title: value,
              id: a++,
              completed: false,
            }),
          );
          setValue("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Input;
