import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./CartSlice";
const Items = ({ id, title, price, image, rating = {} }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-96 h-[400px] rounded bg-gray-300  ">
      <img
        alt="proudct "
        src={image}
        className="h-60 w-full rounded object-cover"
      />
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{price}</p>
        <p className="bg-blue-400 rounded  p-3">{rating?.rate} star</p>
      </div>
      <button
        onClick={() => {
          dispatch(
            addtoCart({
              id,
              title,
              price,
              image,
            }),
          );
        }}
        className="bg-blue-600 hover:bg-blue-800 rounded px-4 py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Items;
