import axios from "axios";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { allTodos } from "./Atom";

const Addtodo = () => {
  const refresh = useRecoilRefresher_UNSTABLE(allTodos);
  async function Add() {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: 1,
        id: 203,
        title: "holllllllllllllllllllllllllllllllllllllllllllllllllll",
        completed: true,
      },
    );
    refresh();
  }
  return (
    <div>
      <button onClick={Add} className="px-3 py-2 bg-blue-500 hover:bg-blue-700">
        add todo
      </button>
    </div>
  );
};

export default Addtodo;
