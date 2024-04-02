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
