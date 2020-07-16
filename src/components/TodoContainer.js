import React from "react";

// CLASS COMPONENT
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
        completed: false,
      },
      {
        id: 2,
        title: "Refresh JS",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>todo</h1>
        <ul>
          {this.state.todos.map((todo) => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// // FUNCTIONAL COMPONENTS
// const TodoContainerFunction = (props) => {
//   return (
//     <div>
//       <h1>{this.props.text}</h1>
//       <p>welcome</p>
//     </div>
//   );
// };

export default TodoContainer;
