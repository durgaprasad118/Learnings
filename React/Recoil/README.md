# Atom

- Atom is the simplest piece of Atom
- increasing count - for this we create a countAtom
- atom has `key` unique thing
- `default`

```js
export const NotificationAtom = atom({
  key: "NotificationAtom",
  default: 100,
});
```

# selector

- derived from other atoms
- example on the `me` bar we should should all the number of `notifications + messages + posts`

## One way

### useMemo()

- use useMemo for calculations

```js
import { useRecoilValue } from "recoil";
import { MessageAtom, NotificationAtom, PostAtom } from "../store/Atoms";
import { useMemo } from "react";

const Display = () => {
  const notificationCount = useRecoilValue(NotificationAtom);
  const messageCount = useRecoilValue(MessageAtom);
  const postCount = useRecoilValue(PostAtom);
  // using useMemo for memoization => it should only recalculate if the values changes
  const total = useMemo(() => {
    return notificationCount + messageCount + postCount;
  }, [notificationCount, messageCount, postCount]);
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
      <button className="px-3 py-1 rounded bg-gray-400">Me ({total})</button>
    </div>
  );
};

export default Display;
```

## Great way is using selectors

```js
export const totalNumber = selector({
  key: "totalNumber",
  get: ({ get }) => {
    const notificationCount = get(NotificationAtom);
    const messageCount = get(MessageAtom);
    const postCount = get(PostAtom);
    return notificationCount + messageCount + postCount;
  },
});
```
