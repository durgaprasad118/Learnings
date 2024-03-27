import React from "react";
class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.Inc}
        className="w-16 px-4 py-2 border rounded"
      >
        Inc
      </button>
    );
  }
}
export default Button;
