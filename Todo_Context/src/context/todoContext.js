import { createContext, useContext } from "react";
export const todoContext = createContext({
  todos: [
    {
      id: 1,
      title: "go to gym",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
});
export const useTodo = () => {
  return useContext(todoContext);
};
export const TodosProvider = todoContext.Provider;
