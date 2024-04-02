import { useRecoilState } from "recoil";
import { MessageAtom } from "../store/Atoms";

const Updater = () => {
  const [messages, setMessages] = useRecoilState(MessageAtom);
  return (
    <div className="mt-10">
      <h1>The current message Count is: {messages}</h1>
      <button
        onClick={() => {
          setMessages((prev) => prev + 1);
        }}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
      >
        Update Messages
      </button>
    </div>
  );
};

export default Updater;
