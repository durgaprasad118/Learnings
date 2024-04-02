import { TodoType } from "./Types";
const TodoItem = ({ id, title, completed }: TodoType) => {
  return (
    <div className="flex items-center gap-10">
      <input type="radio" />
      <h1>{title}</h1>
    </div>
  );
};

export default TodoItem;
