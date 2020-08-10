import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

// CLASS COMPONENT
class TodoContainer extends React.Component {
	state = {
		id: "",
		title: "",
		completed: false,
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

	handleChange = (id) => {
		// console.log("hello");
		// console.log(id);

		this.setState(
			this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	addTask = (event) => {
		// console.log("hello");
		console.log(event.target.value);

		this.setState({ title: event.target.value });
	};

	submitTask = (event) => {
		// console.log("hello");
		// console.log(event);
		event.preventDefault();
		const currentTask = {
			id: `1${Date.now()}`,
			title: this.state.title,
			completed: false,
		};
		const todosState = this.state.todos;
		// PUSH INTO LIST
		todosState.push(currentTask);
		// RESET COMMENT AND NAME IN STATE
		this.setState({
			id: `1${Date.now()}`,
			comment: "",
			name: "",
			todos: todosState,
		});
	};

	deleteTask = (id) => {
		// console.log("hello");
		// console.log(id);

		const updatedTodosArray = this.state.todos.filter((item) => item.id !== id);

		this.setState({
			todos: updatedTodosArray,
		});
	};

	render() {
		return (
			<div>
				<Header />
				<ul className="todo-list">
					{this.state.todos.map((todo) => (
						<TodoItem
							key={todo.id}
							title={todo.title}
							completed={todo.completed}
							id={todo.id}
							handleChange={this.handleChange}
							deleteTask={this.deleteTask}
						/>
					))}
				</ul>
				<form className="task-form" action="#">
					<label htmlFor="#">Add a task:</label>
					<input type="text" value={this.state.title} onChange={this.addTask} />
					<button onClick={this.submitTask}>Submit</button>
				</form>
			</div>
		);
	}
}
//
export default TodoContainer;
