import React from "react";

// CLASS COMPONENT
// class TodoItem extends React.Component {
//   render() {
//     return <li>{this.props.title}</li>;
//   }
// }

// FUNCTIONAL COMPONENT
const TodoItem = (props) => {
  return <li>{props.title}</li>;
};

export default TodoItem;
