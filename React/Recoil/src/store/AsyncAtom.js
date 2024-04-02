import axios from "axios";
import { atom, selector } from "recoil";
export const CountAtom = atom({
  key: "CountAtom",
  // default: {
  //   notifications: 0,
  //   messaging: 0,
  //   jobs: 0,
  // },
  default: selector({
    key: "countSelector",
    get: async () => {
      const { data } = await axios.get(
        "https://sum-server.100xdevs.com/notifications",
      );
      return data;
    },
  }),
});

export const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const counts = get(CountAtom);
    return counts.messaging + counts.jobs + counts.notifications;
  },
});
