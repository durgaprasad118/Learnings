## UseEffect

- useEffect called when component renders for the firstTime

- if the component unmounts from the DOM then only "return" funciton is called-

```js
useEffect(() => {
  console.log("component mounted");
  return () => {
    console.log("component unmounted");
  };
}, []);
```

### Life Cycle Events

1. component mounted
   if the dependency array changes then
1. return function called
1. useEffect funcion runs

```js
import { FunctioalC } from "./Functional";
const CUstom = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  }, []);
  return <div>{visible ? <FunctioalC /> : <div>Gone</div>}</div>;
};
// firstTime logs => component mounted
//after 10secs => component unmounted
```

```js
function FunctioalC() {
  const [a, setA] = useState("");
  useEffect(() => {
    console.log("initial render");
    console.log(a);
    return () => {
      console.log("return thng called");
    };
  }, [a]);

  return (
    <div>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border border-black px-3"
        placeholder="test"
      />
    </div>
  );
}

export { FunctioalC };
```

## lifeCycle Events in ClassBased Components

```js
import React from "react";
class MyClassComponent extends React.Component {
  //inital render
  componentDidMount() {
    console.log("mounted Component");
  }
  //when unmounted
  componentWillUnmount() {
    console.log("unmounted component");
  }

  //when props or sate changes
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated - Previous count:",
      prevState.count,
      "Current count:",
      this.state.count,
    );
  }
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Inc}>inc</button>
        <br />
        <button onClick={this.Dec}>Dec</button>
      </div>
    );
  }
}
export { MyClassComponent };
```
