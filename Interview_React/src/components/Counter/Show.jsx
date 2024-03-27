import { useSelector } from "react-redux";
const Show = () => {
  const count = useSelector((state) => state.counter.count);
  return <div>The value of the count is : {count}</div>;
};

export default Show;
