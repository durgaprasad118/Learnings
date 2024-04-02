import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector<number>({
  key: "textStateCount",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
