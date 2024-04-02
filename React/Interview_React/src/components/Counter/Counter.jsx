import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Show from "./Show";
import Button from "./Button";
import Input from "./Input";
const Counter = () => {
  return (
    <Provider store={store}>
      <Show />
      <Button value="increment" />
      <Button value="decrement" />
      <Button value="reset" />
      <Input />
    </Provider>
  );
};

export default Counter;
