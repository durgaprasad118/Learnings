import Buttons from "./CounterRedux/Buttons";
import Show from "./CounterRedux/Show";
import Addtodo from "./TodoComponents/Addtodo";
import Todos from "./TodoComponents/Todos";

function App() {
  return (
    <div>
      <Addtodo />
      <Todos />

      <div>
        <Show />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
