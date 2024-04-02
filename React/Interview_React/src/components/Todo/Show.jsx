import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import todoFilter from "./TodoFilter";
import { useMemo } from "react";

const Show = ({ tab = "all" }) => {
  const todoList = useSelector((state) => state.todos.todos);
  //NOTE: without Memo
  console.time("without memo");
  const todosWithoutMemo = todoFilter(todoList, tab);
  console.timeEnd("without memo");

  //NOTE: with memo
  console.time("with memo");
  const todos = useMemo(() => {
    return todoFilter(todoList, tab);
  }, [tab, todoList]);
  console.timeEnd("with memo");
  return (
    <div>
      {todos.map((x) => {
        return <TodoItem key={x.id} {...x} />;
      })}
    </div>
  );
};

export default Show;
