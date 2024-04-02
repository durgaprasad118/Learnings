import axios from "axios";
import { useEffect } from "react";

const Index = () => {
  function main() {
    fetch("https://sum-server.100xdevs.com/todos")
      .then((res) => res.json())
      .then((x) => console.log(x.todos));
  }

  async function fetchData() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const data = await response.json();
    console.log(data.todos);
  }

  async function postData() {
    const { data } = await axios.post(
      "https://httpdump.app/dumps/b28bfe48-a4c7-487a-9fff-d1bd41ffada2",
      {
        name: "hkirat",
      },
      {
        headers: {
          Authorization: "Bearer 435",
        },
      },
    );
    console.log(data);
  }

  async function usingAxios() {
    const { data } = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(data.todos);
  }
  useEffect(() => {
    // main();
    // fetchData();
    // usingAxios();
    postData();
  }, []);
  return <></>;
};
export default Index;
