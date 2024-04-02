import { useRecoilValueLoadable } from "recoil";
import { allTodos } from "./Atom";
import { TodoItem } from "./TodoItem";
import Addtodo from "./Addtodo";

const Show = () => {
  const { state, contents } = useRecoilValueLoadable(allTodos);
  if (state === "loading") {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <Addtodo />
      <div className="flex items-center w-1/2 flex-col gap-10">
        {contents.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default Show;
