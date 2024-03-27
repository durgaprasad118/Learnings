import React from "react";
import Show from "./Show";
import Button from "./Button";
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decCount = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <Show count={count} />
        <p
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          +
        </p>
        <Button Inc={this.incCount} />
      </>
    );
  }
}

export default Wrapper;
