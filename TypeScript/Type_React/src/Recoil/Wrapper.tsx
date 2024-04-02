import { RecoilRoot } from "recoil";
import Show from "./Show";
import Input from "./Input";

const Wrapper = () => {
  return (
    <RecoilRoot>
      <Input />
      <Show />
    </RecoilRoot>
  );
};

export default Wrapper;
