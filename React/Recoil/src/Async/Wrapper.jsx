import { RecoilRoot } from "recoil";
import Display from "./Display";

const Wrapper = () => {
  return (
    <RecoilRoot>
      <div className="w-1/2">
        <Display />
      </div>
    </RecoilRoot>
  );
};

export default Wrapper;
