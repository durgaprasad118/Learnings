import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from ".";
import { TodoType } from "./Types";

const Input = () => {
  const [todo, setTodo] = useState<string>("");
  const setTodos = useSetRecoilState(todoAtom);
  function AddTodo() {
    setTodos((prev: TodoType[]) => [
      ...prev,
      {
        id: 501,
        title: todo,
        completed: false,
        userId: 20,
      },
    ]);
    setTodo("");
  }
  return (
    <div>
      <input
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        name="age"
        className="px-10 py-2 border-2 border-black rounded-md"
      />
      <button
        onClick={AddTodo}
        className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-700"
      >
        Add todo
      </button>
    </div>
  );
};

export default Input;
