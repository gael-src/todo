import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

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
        <Header />
        <ul className="todo-list">
          {this.state.todos.map((todo) => (
            // <li key={todo.id}>{todo.title}</li>
            <TodoItem key={todo.id} title={todo.title} />
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
