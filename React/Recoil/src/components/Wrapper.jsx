import { RecoilRoot } from "recoil";
import Display from "./Display";
import Updater from "./Updater";

const Wrapper = () => {
  return (
    <RecoilRoot>
      <div className="w-1/2">
        <Display />
        <Updater />
      </div>
    </RecoilRoot>
  );
};

export default Wrapper;
