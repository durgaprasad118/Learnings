import React from "react";
class MyClassComponent extends React.Component {
  //inital render
  componentDidMount() {
    console.log("mounted Component");
  }
  //when unmounted
  componentWillUnmount() {
    console.log("unmounted component");
  }

  //when props or sate changes
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated - Previous count:",
      prevState.count,
      "Current count:",
      this.state.count,
    );
  }
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Inc}>inc</button>
        <br />
        <button onClick={this.Dec}>Dec</button>
      </div>
    );
  }
}
export { MyClassComponent };
