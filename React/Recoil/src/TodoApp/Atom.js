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

//NOTE: Here get thing is :
//returning a function from a function
/* 
function (id){
  return async function(){
    return data;
  }
}
*/
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
