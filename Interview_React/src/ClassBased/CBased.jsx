import React, { Component } from "react";
let name = "protr";
let price = 50;
export default class Card2 extends React.Component {
  constructor() {}
  render() {
    return (
      <div className="border border-black text-blue-500 h-40 w-60  flex flex-col items-center gap-4">
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
        <button className="px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-400 ">
          Buy
        </button>
      </div>
    );
  }
}
