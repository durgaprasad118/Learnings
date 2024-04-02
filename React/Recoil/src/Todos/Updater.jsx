import { useSetRecoilState } from "recoil";
import { todosAtom } from "./TodoAtomFamily";
import { useEffect } from "react";

const Updater = () => {
  const Update2nd = useSetRecoilState(todosAtom(2));
  useEffect(() => {
    setTimeout(() => {
      Update2nd({
        id: 2,
        title: "hola from 2nd",
        description: "hehe",
        completed: true,
      });
    }, 6000);
  }, []);
  return <div></div>;
};

export default Updater;
