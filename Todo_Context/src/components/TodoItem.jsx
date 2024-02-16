import { useState, memo } from "react";
import { useTodo } from "../context";

const TodoItem = memo(({ todo }) => {
  const edited = todo.completed;
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleTodo, deleteTodo } = useTodo();
  function Update() {
    updateTodo(todo.id, {
      ...todo,
      todo: todoMsg,
    });
  }
  function Del() {
    deleteTodo(todo.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={edited}
      />
      <h1>{todo.todo}</h1>
      <input
        type="text"
        value={todoMsg}
        className="px-3 py-1 border-black border "
        placeholder="Update todo"
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
      />
      <button className="px-3 py-1 bg-green-800 " onClick={Update}>
        Edit
      </button>
      <button onClick={Del} className="px-3 py-1 bg-red-800 ">
        Delete
      </button>
    </div>
  );
});

export default TodoItem;
