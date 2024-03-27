const EnhancedCard = (OldComponent) => {
  return function NewComponent(props) {
    return (
      <div className="relative ">
        <div className=" absolute top-2 left-2 p-2 bg-red-400 rounded w-24 ">
          Enhanced
        </div>
        <OldComponent {...props} />
      </div>
    );
  };
};

export default EnhancedCard;
