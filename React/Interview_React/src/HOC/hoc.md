#HOC

```js
const HOC = (OldComponent) => {
  return (props) => {
    return (
      <div className="bg-black text-white">
        <h1>HOC</h1>
        <OldComponent {...props} />
      </div>
    );
  };
};
export default HOC;
```

## Basic OldComponent

```js
import React from "react";

const Basic = ({ name }) => {
  return (
    <div className="bg-blue-300 h-20 w-20">
      <h1>{name}</h1>
    </div>
  );
};

export default Basic;
```

```js

  const Bigger = HOC(Basic);
  let data = [
    { id: 1, name: "Item 1", rating: 3 },
    { id: 2, name: "Item 2", rating: 4 },
    { id: 3, name: "Item 3", rating: 2 },
    { id: 4, name: "Item 4", rating: 5 },
    { id: 5, name: "Item 5", rating: 1 },
    { id: 6, name: "Item 6", rating: 4 },
    { id: 7, name: "Item 7", rating: 3 },
    { id: 8, name: "Item 8", rating: 2 },
    { id: 9, name: "Item 9", rating: 5 },
    { id: 10, name: "Item 10", rating: 3 },
    { id: 11, name: "Item 11", rating: 4 },
    { id: 12, name: "Item 12", rating: 2 },
    { id: 13, name: "Item 13", rating: 1 },
    { id: 14, name: "Item 14", rating: 4 },
    { id: 15, name: "Item 15", rating: 3 },
    { id: 16, name: "Item 16", rating: 5 },
    { id: 17, name: "Item 17", rating: 2 },
    { id: 18, name: "Item 18", rating: 3 },
    { id: 19, name: "Item 19", rating: 4 },
    { id: 20, name: "Item 20", rating: 2 },
  ];

  return (
    <div className="m-5 flex flex-col gap-7">
      {/* <Todo /> */}
      {/* <Counter /> */}
      {/* <Index /> */}
      {/* <BrowserRouter> */}
      {/*   <Routes> */}
      {/*     <Route path="/" element={<Wrapper />}> */}
      {/*       <Route path="/" element={<Page />} /> */}
      {/*       <Route path="/c" element={<CHnage />} /> */}
      {/*     </Route> */}
      {/*   </Routes> */}
      {/* </BrowserRouter> */}
      {/* <Appp /> */}
      {/* <Wrapper /> */}
      {data.map((x) => {
        return x.rating > 3 ? (
          <Bigger key={x.id} {...x} />
        ) : (
          <Basic key={x.id} {...x} />
        );
      })}
      <Basic />
      <Bigger />
    </div>
```
