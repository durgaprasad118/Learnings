import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos.filter((x) => x.id !== id);
      state.todos = [...todos];
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
      state.todos = [...todos];
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
