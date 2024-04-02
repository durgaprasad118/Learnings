import { useRecoilValue } from "recoil";
import {
  MessageAtom,
  NotificationAtom,
  PostAtom,
  totalNumber,
} from "../store/Atoms";

const Display = () => {
  const notificationCount = useRecoilValue(NotificationAtom);
  const messageCount = useRecoilValue(MessageAtom);
  const postCount = useRecoilValue(PostAtom);
  // using useMemo for memoization => it should only recalculate if the values changes
  const value = useRecoilValue(totalNumber);
  return (
    <div className="flex justify-center mt-10 items-center gap-10">
      <button className="px-3 py-1 rounded bg-gray-400">Home</button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Notifications ({notificationCount})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Messages ({messageCount})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Posts ({postCount})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">Me ({value})</button>
    </div>
  );
};

export default Display;
