import React from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

	componentDidMount() {
		console.log("Component did mount");
		axios
			.get("https://jsonplaceholder.typicode.com/todos", {
				params: { _limit: 10 },
			})
			.then((response) => {
				console.log(response.data);
				this.setState({
					todos: response.data,
				});
			});
		// ADD JSON TODO
	}

	componentDidUpdate() {
		console.log("Component did update");
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
		console.log("Component render");
		return (
			<div>
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
