const Tab = ({ setTab }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setTab("all")}
        className="px-4 py-2 rounded bg-green-500 hover:bg-green-700"
      >
        All
      </button>
      <button
        onClick={() => setTab("done")}
        className="px-4 py-2 rounded bg-green-500 hover:bg-green-700"
      >
        Done
      </button>
      <button
        onClick={() => setTab("not")}
        className="px-4 py-2 rounded bg-green-500 hover:bg-green-700"
      >
        Not Completted
      </button>
    </div>
  );
};

export default Tab;
