import React from "react";

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.title}</li>;
  }
}

export default TodoItem;
