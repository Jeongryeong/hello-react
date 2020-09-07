import React, { Component } from "react";

class EventPrictice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="message"
          placeholder="input anything"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default EventPrictice;
