# Atom Family

- returns a funciton that returns a writable `RecoilState` atom
- returns same value for a particular input

```js

```

## atom and atom family

```js
import { atomFamily } from "recoil";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "todo 1 description",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "todo 2 description",
    completed: false,
  },
];
// default isn't a value anymore it is a function
// returns cached value
// returns actullay a atom
export const todosAtom = atomFamily({
  key: "todosAtom",
  default: (id) => {
    return todos.find((x) => x.id === id);
  },
});
```

```js
import { useRecoilValue } from "recoil";
import { todosAtom } from "./TodoAtomFamily";

const Show = () => {
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
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
```
