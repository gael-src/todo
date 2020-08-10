import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Form from "./Form";

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// id: "",
			// title: "",
			// completed: false,
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
	}

	handleChange = (id) => {
		const updatedTodosArr = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({
			todos: updatedTodosArr,
		});
	};

	// ADD TASK
	addTaskItem = (title) => {
		// CURRENT TASK AND STATE TODOS
		const currentTask = {
			id: `1${Date.now()}`,
			title: title,
			completed: false,
		};
		// const todosState = this.state.todos;
		const todosState = [...this.state.todos];

		// PUSH INTO LIST
		todosState.push(currentTask);

		// RESET COMMENT AND NAME IN STATE
		this.setState({
			todos: todosState,
		});
	};

	// DELETE TASK
	deleteTask = (id) => {
		const updatedTodosArray = this.state.todos.filter((item) => item.id !== id);

		this.setState({
			todos: updatedTodosArray,
		});
	};

	render() {
		return (
			<div>
				{/* HEADER */}
				<Header />

				{/* TASK INPUT */}
				<Form addTaskItem={this.addTaskItem} />

				{/* TASK OUTPUT */}
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
			</div>
		);
	}
}
//
export default TodoContainer;
