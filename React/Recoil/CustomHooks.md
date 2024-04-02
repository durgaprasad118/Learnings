## Custom Hooks

- A custom hook is a function , starts with use
- Internally uses useEffect or useState or another custom Hooks
  -- uses
- cleaner
- if there is a change needed , we can change in customhook instead of chaning in multiple places

> Data fetching Hooks

- useTodos
- whenever we are using a state varaible in useEffect it should be added as a dependency
- if you are using `setTimeout or setInterval` and the value changes using dep then => use return (clearInterval or clearTimout) to remove the previous timers
- this is to make one active clock

```js
import axios from "axios";
import { useEffect, useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDt = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(data.todos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDt();
  }, []);
  return {
    todos,
    loading,
  };
};

export default useTodos;
```
