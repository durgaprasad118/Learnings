```js
import { useState, memo } from "react";
import { TodosProvider } from "./context";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...todo,
      },
    ]);
  }
  console.log(todos);
  function updateTodo(id, todo) {
    setTodos((prev) => prev.map((x) => (x.id == id ? todo : x)));
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((x) => x.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((x) =>
        x.id === id
          ? {
              ...x,
              completed: !x.completed,
            }
          : x,
      ),
    );
  }
  return (
    <>
      <TodosProvider
        value={{ todos, addTodo, updateTodo, toggleTodo, deleteTodo }}
      >
        <AddTodo />
        {todos.map((x) => {
          return <TodoItem key={x.id} todo={x} />;
        })}
      </TodosProvider>
    </>
  );
}

export default memo(App);
```
