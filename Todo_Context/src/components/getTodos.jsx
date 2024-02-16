import React, { useEffect } from "react";
import { useTodo } from "../context";

const GetTodos = () => {
  const { todos } = useTodo();
  if (todos && todos.length > 0) {
  }
  console.log(todos);
  useEffect(() => {}, []);
  return <div>getTodos</div>;
};

export default GetTodos;
