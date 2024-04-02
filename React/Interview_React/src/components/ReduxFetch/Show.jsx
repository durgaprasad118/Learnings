import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "./dataSlice";
const Show = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.data.data);
  async function fetchData() {
    const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(addAll(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(values);
  return (
    <div>
      {values.map((x) => {
        return <h1 key={x?.id}>{x?.title}</h1>;
      })}
    </div>
  );
};

export default Show;
