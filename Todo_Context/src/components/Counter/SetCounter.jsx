import { useCount } from "../../CountContext";

const SetCounter = () => {
  const { setVal } = useCount();
  return (
    <div>
      <button
        onClick={() => setVal((prev) => prev + 1)}
        className="border bg-black text-white px-3 py-1"
      >
        Inc
      </button>
    </div>
  );
};

export default SetCounter;
