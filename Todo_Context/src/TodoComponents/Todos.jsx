import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setTodos } from "../features/todoSlice";
import { useEffect } from "react";
import axios from "axios";
import { FetchData } from "./fetchTodos";
import { useQuery } from "@tanstack/react-query";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: FetchData,
  });
  if (isSuccess) {
    console.log(data);
  }
  const DeleteTodos = async (id) => {
    try {
      const response = await axios.delete(
        "http://localhost:8095/todos/delete/" + id,
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
      {todos.map((x) => {
        return (
          <li key={x._id}>
            {x.title}
            <button
              onClick={() => {
                dispatch(removeTodo(x._id));
                DeleteTodos(x._id);
              }}
              className="bg-red-600 mx-2 my-1 "
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
