import { useRecoilValue } from "recoil";
import { charCountState, textState } from "./store";

const Show = () => {
  const text = useRecoilValue(textState);
  const length = useRecoilValue(charCountState);
  return (
    <div>
      <h1>Echo: {text}</h1>
      <h1> The length is : {length} </h1>
    </div>
  );
};

export default Show;
