import { RecoilRoot } from "recoil";
import Todos from "./Todos";

const Wrapper = () => {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
};

export default Wrapper;
