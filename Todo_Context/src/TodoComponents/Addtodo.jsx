import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import axios from "axios";
import { PostTodos } from "./fetchTodos";
import { useMutation } from "@tanstack/react-query";
const Addtodo = () => {
  const [val, setVal] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: PostTodos,
  });
  const POstTOdos = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8095/todos/createTodo",

        { title: val, description: des },

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleGlzdGluZ1VzZXIiOnsiX2lkIjoiNjViZjllMTZmZTRkYmQwZjFmMDA5NGU1IiwiZW1haWwiOiJkdXJnYWFhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJHpkZFkzV3BVcXFmMGVObVRuL2l1Z09PUy8ycm9ZWkR0TTI4cTZYWmt0dlhTTFVqSzYuUXU2IiwidXNlcm5hbWUiOiJkcDExMDgiLCJhdmF0YXIiOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RxbGR3bnAxMy9pbWFnZS91cGxvYWQvdjE3MDcwNTY2NjEvZXFlc3VsY2g2YTcwN3Fna2V6djkucG5nIiwiY3JlYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0wNFQxNDoyNDoyMi43NDZaIiwiX192IjowfSwiaWF0IjoxNzA3NjM3MTQzLCJleHAiOjE3MDc2NTUxNDN9.pvk3wpGzdScvD0JhMPfz7uMpRfQblU9XJRVzQ2-U6PU",
          },
        },
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="border-black px-3 py-1 "
        placeholder="Enter todo"
      />
      <input
        value={des}
        onChange={(e) => setDes(e.target.value)}
        className="border-black px-3 py-1 "
        placeholder="Enter desc"
      />
      <button
        onClick={() => {
          const title = val;
          const description = des;
          mutate({ title, description });
          dispatch(addTodo(val));
          setVal("");
          setDes("");
        }}
        className="bg-red-600 border-black"
      >
        Add todo
      </button>
    </div>
  );
};

export default Addtodo;
