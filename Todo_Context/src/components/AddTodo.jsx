import { useState } from "react";
import { useTodo } from "../context";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  function AddItem(e) {
    e.preventDefault();
    if (!todo) {
      return;
    } else {
      addTodo({ todo, completed: false });
    }
    setTodo("");
  }
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border px-4 py-1"
        placeholder="add todo"
      />
      <button onClick={AddItem} className="px-2 py-1 bg-black text-white">
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
