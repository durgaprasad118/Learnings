import { useRecoilState, useRecoilValue } from "recoil";
import { CountAtom, totalCount } from "../store/AsyncAtom";
import { useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [counts, setCount] = useRecoilState(CountAtom);
  const total = useRecoilValue(totalCount);
  const FetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://sum-server.100xdevs.com/notifications",
      );
      setCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-10 items-center gap-10">
      <button className="px-3 py-1 rounded bg-gray-400">Home</button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Notifications ({counts.notifications})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Messages ({counts.messaging})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">
        Posts ({counts.jobs})
      </button>
      <button className="px-3 py-1 rounded bg-gray-400">Me ({total})</button>
    </div>
  );
};

export default Display;
