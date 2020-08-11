import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: uuidv4(),
					title: "Read React doc",
					completed: false,
				},
				{
					id: uuidv4(),
					title: "Make a to-do",
					completed: false,
				},
			],
		};
	}

	// TASK CHECKBOX
	taskStatus = (id) => {
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
			id: uuidv4(),
			title: title,
			completed: false,
		};
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
							taskStatus={this.taskStatus}
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
