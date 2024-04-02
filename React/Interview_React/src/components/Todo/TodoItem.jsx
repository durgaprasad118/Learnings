import { memo } from "react";
import { deleteTodo, toggleTodo } from "../../TodoRedux/TodoSlice";
import { useDispatch } from "react-redux";
const TodoItem = memo(({ title, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-6 mt-1">
      <input
        type="checkbox"
        value={completed}
        onChange={() => {
          dispatch(toggleTodo(id));
        }}
      />
      <h1 className={`${completed && "line-through"}`}>{title}</h1>
      <button
        className="px-4 py-2 rounded bg-red-500 bg-red-700"
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        delete
      </button>
    </div>
  );
});

export default TodoItem;
