import { useCount } from "../../CountContext";

const CountDisplay = () => {
  const { val } = useCount();
  return <div>The value of the count is : {val}</div>;
};

export default CountDisplay;
