import React from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				// {
				// 	id: uuidv4(),
				// 	title: "Read React Doc",
				// 	completed: false,
				// },
				// {
				// 	id: uuidv4(),
				// 	title: "Make todo",
				// 	completed: false,
				// },
			],
		};
	}

	componentDidMount() {
		// console.log("Component did mount");
		axios
			// .get("https://jsonplaceholder.typicode.com/todos", {
			// 	params: { _limit: 10 },
			// })
			.get("http://localhost:3001/Tasks")
			.then((response) => {
				console.log(response.data);
				// ADD JSON TODO
				this.setState({
					todos: response.data,
				});
			});
	}

	componentDidUpdate() {
		// console.log("Component did update");
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
		// console.log("Component render");
		return (
			<div>
				{/* TASK INPUT */}
				<Form addTaskItem={this.addTaskItem} />

				{/* TASK OUTPUT */}
				<ul className="todo-list">
					{this.state.todos.map((todo) => (
						<TodoItem
							key={todo._id}
							title={todo.title}
							completed={todo.completed}
							id={todo._id}
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
