import { Provider } from "react-redux";
import Show from "./Show";
import { store } from "./store";
import Input from "./Input";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Input />
        <Show />
      </Provider>
    </div>
  );
};

export default Index;
