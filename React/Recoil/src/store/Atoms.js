import { atom, selector } from "recoil";

export const NotificationAtom = atom({
  key: "NotificationAtom",
  default: 100,
});

export const MessageAtom = atom({
  key: "MessageAtom",
  default: 10,
});

export const PostAtom = atom({
  key: "PostAtom",
  default: 2,
});

export const totalNumber = selector({
  key: "totalNumber",
  get: ({ get }) => {
    const notificationCount = get(NotificationAtom);
    const messageCount = get(MessageAtom);
    const postCount = get(PostAtom);
    return notificationCount + messageCount + postCount;
  },
});
