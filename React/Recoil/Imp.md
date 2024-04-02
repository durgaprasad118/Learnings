# invalidating queries

- suppose after a post request if you want to refetch the data

```js

  const refresh = useRecoilRefresher_UNSTABLE(atom to be cllaed again);
  refresh()
```

## suspense

```js
<Suspense fallback ={"loading..."}>
//wrap here
</Suspense/>
```

## loading hasValue

```js
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
```

## async atomfamily and atoms

```js
import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
export const allTodos = atom({
  key: "allTodosAtom",
  default: selector({
    key: "allTodosSelector",
    get: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      return data;
    },
  }),
});

export const particularTodo = atomFamily({
  key: "particularTodo",
  default: selectorFamily({
    key: "particularTodoSelector",
    get: (id) => async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      return data;
    },
  }),
});
```

## Routing to specific page and fetching

- suppose you have a item where you get data and you want to go to that page on clicking and get data fetched there then do this

```js
// route

<Route path="/p/:id" element={<DisplayJust />} />;

// component
export const TodoItem = ({ title = "", id }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/p/${id}`);
  }
  return (
    <h1 onClick={handleClick} className="text-xl text-gray-600">
      {title}
    </h1>
  );
};

// getting id

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
```
