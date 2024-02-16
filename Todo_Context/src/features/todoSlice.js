import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((x) => x._id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((x) =>
        x.id == action.payload.id ? action.payload.todo : x,
      );
    },
    // toogleTodo:(state,action)=>{
    //   state.todos = state.todos.map((x)=> x.id== action.payload.id? )
    // }
  },
});

export const { addTodo, removeTodo, updateTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
