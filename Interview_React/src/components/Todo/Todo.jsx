import { Provider } from "react-redux";
import { store } from "../../TodoRedux/store";
import Show from "./Show";
import Input from "./Input";
import Tab from "./Tab";
import { useState } from "react";
const Todo = () => {
  const [tab, setTab] = useState("all");
  return (
    <Provider store={store}>
      <div className="flex flex-col gap-3">
        <Input />
        <Tab setTab={setTab} />
        <Show tab={tab} />
      </div>
    </Provider>
  );
};

export default Todo;
