import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./dataSlice";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const postPorduct = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: value,
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
      const data = await response.json();
      dispatch(addPost(data));
    } catch (error) {
      console.log(error);
    }
  };
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
          postPorduct();
          setValue("");
        }}
      >
        {" "}
        Add Product{" "}
      </button>{" "}
    </div>
  );
};
export default Input;
