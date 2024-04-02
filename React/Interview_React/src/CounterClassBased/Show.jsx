import React from "react";
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1> The value of the count is{this.props.count}</h1>
      </div>
    );
  }
}
export default Show;
