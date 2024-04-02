import { useEffect, useState } from "react";
import { TodoType } from "./Types";
import { useRecoilState } from "recoil";
import { todoAtom } from ".";
import TodoItem from "./TodoItem";
import Input from "./Input";
const Todos: React.FC = () => {
  const [todos, SetTodos] = useRecoilState<TodoType[]>(todoAtom);
  const [loading, setLoading] = useState<boolean>(false);
  async function fetchDt() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      SetTodos(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchDt();
  }, []);
  if (loading) {
    return <h1 className="text-2xl text-black ">Loading....</h1>;
  }
  return (
    <div>
      <Input />
      {todos?.map((todo: TodoType) => <TodoItem key={todo?.id} {...todo} />)}
    </div>
  );
};

export default Todos;
