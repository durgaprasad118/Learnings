```js
import SetCounter from "./components/Counter/SetCounter";
import CountDisplay from "./components/Counter/countDisplay";
import { CountContextProvider } from "./CountContext";
import { useState } from "react";
function App() {
  const [val, setVal] = useState(0);
  return (
    <CountContextProvider value={{ val, setVal }}>
      <CountDisplay />
      <SetCounter />
    </CountContextProvider>
  );
}

export default App;
```
