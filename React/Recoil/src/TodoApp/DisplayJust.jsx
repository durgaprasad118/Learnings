import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { particularTodo } from "./Atom";
export const DisplayJust = () => {
  const { id } = useParams();
  const { state, contents } = useRecoilValueLoadable(particularTodo(id));
  if (state == "hasValue") {
    console.log(contents);
  }
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <h1 className="text-2xl font-bold"> {contents.title}</h1>
    </div>
  );
};
