import { useRecoilValue } from "recoil";
import { todosAtom } from "./TodoAtomFamily";
import { Suspense } from "react";

const Show = () => {
  return (
    <div>
      <Suspense fallback={"Loading.."}>
        <Todo id={1} />
        <Todo id={2} />
      </Suspense>
    </div>
  );
};

const Todo = ({ id }) => {
  const todo = useRecoilValue(todosAtom(id));
  return (
    <div className="flex gap-4">
      <h1> {todo.title}</h1>
      <h1> {todo.description}</h1>
    </div>
  );
};
export default Show;
