import { RecoilRoot } from "recoil";
import Show from "./Show";
import Updater from "./Updater";

const Wrapper = () => {
  return (
    <RecoilRoot>
      <Show />
    </RecoilRoot>
  );
};

export default Wrapper;
