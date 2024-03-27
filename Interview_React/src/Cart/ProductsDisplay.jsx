import { useEffect, useState } from "react";
import axios from "axios";
import Items from "./Items";
const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col flex-wrap gap-10">
      {products.length > 0 &&
        products.map((x) => {
          return <Items key={x?.id} {...x} />;
        })}
    </div>
  );
};

export default ProductsDisplay;
