import { useRecoilState } from "recoil";
import { textState } from "./store";

const Input = () => {
  const [text, setText] = useRecoilState<string>(textState);
  return (
    <input
      placeholder="Type here"
      value={text}
      onChange={(e) => setText(e.target.value)}
      name="name"
      type="text"
      className="px-6 py-2 border-2 border-black rounded-md"
    />
  );
};

export default Input;
