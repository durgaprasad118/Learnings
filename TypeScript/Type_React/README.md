## declaration files

- `types.ts ` file is used for
- `lib` folder

```js
// import this
import { type speakerTypes } from "./lib/types.ts";
```

- when we don't know what is coming from let's say api call
- use `unknown`

## interface vs type

```js

//interface uses extends
//whatever we need to write it is written inside {}
interface X {
  size: "small" | "large" | "medium";
}
interface Y extends X {
  color: "blue";
}

//interface uses &
//whatever we need to write it  can be written any how
//like for primitives or complex {}
type Connect_Url = string;
type A = {
  name: "a" | "b" | "c";
};

type B = A & {
  size: "small" | "large" | "medium";
};

```

## useState\_ input change

```js

import { useState } from "react";
type User = {
  name: string;
  age: number;
};
const Hooks = () => {
  const [user, setUser] = useState<User>({ name: "", age: 0 });
  function handleClick() {
    setUser({
      name: "",
      age: 0,
    });
    console.log(user);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col gap-10">
      <input
        placeholder="Name"
        value={user?.name}
        onChange={handleChange}
        name="name"
        type="text"
        className="px-10 py-4 border-2 border-black rounded-md"
      />
      <input
        value={user?.age}
        placeholder="age"
        onChange={handleChange}
        type="number"
        name="age"
        className="px-10 py-4 border-2 border-black rounded-md"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-700"
      >
        Click to set The user
      </button>
    </div>
  );
};

export default Hooks;
```

## ref

- define the type on which ref is used

```js
import { useEffect, useRef } from "react";

const Ref = () => {
  const ref = useRef < HTMLDivElement > null;
  useEffect(() => {
    console.log(ref.current?.innerText);
  }, []);
  return <div ref={ref}>Ref</div>;
};

export default Ref;
```

## localstorage thingy

```js

type colors ="blue " | "red";
  //generally this is string or null by default
  //if you want to specify something in particular type  then do this
  const BottomColors = localStorage.getItem("color") as colors

```

## Generics

```js
// Example for gerneric type a function returning in the form of an array using the input
  function ConvertToArray<T>(val: T): T[] {
    return [val];
  }

  const answer = ConvertToArray<number>(4);

  console.log(answer);

  const stringConverted = ConvertToArray<string>("hello");
  console.log(stringConverted[0].toUpperCase());

```
