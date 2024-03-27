const todoFilter = (todos, tab) => {
  return todos.filter((todo) => {
    if (tab == "all") {
      return true;
    } else if (tab === "done") {
      return todo.completed;
    } else if (tab === "not") {
      return !todo.completed;
    }
  });
};

export default todoFilter;
