import axios from "axios";
import React, { useEffect, useState } from "react";
import useTodos from "./useTodos";
import useOnline from "./useOnline";

const Todos = () => {
  const { todos, loading } = useTodos();
  const online = useOnline();
  console.log(online);
  if (!online) {
    return <h1>ugh no</h1>;
  }
  if (loading) {
    return <h1>loading.....</h1>;
  }

  return (
    <div>
      {online ? <h1>Yay! you are online</h1> : <h1>ugh no</h1>}
      {todos.map((todo) => {
        return <Disp title={todo?.title} />;
      })}
    </div>
  );
};

function Disp({ title }) {
  return <h1>{title}</h1>;
}

export default Todos;
