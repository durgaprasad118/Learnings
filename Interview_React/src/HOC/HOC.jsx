const HOC = (OldComponent) => {
  return (props) => {
    return (
      <div className="bg-black text-white">
        <h1>HOC</h1>
        <OldComponent {...props} />
      </div>
    );
  };
};
export default HOC;
