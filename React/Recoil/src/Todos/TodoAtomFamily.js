import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

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

//NOTE: Below is for hardCoded data
// export const todosAtom = atomFamily({
//   key: "todosAtom",
//   default: (id) => {
//     return todos.find((x) => x.id === id);
//   },
// });
//

// function returning a function
export const todosAtom = atomFamily({
  key: "todosAtom",
  default: selectorFamily({
    key: "todosSelector",
    get: (id) => async () => {
      const { data } = await axios.get(
        `https://sum-server.100xdevs.com/todo?id=${id}`,
      );
      return data.todo;
    },
  }),
});
