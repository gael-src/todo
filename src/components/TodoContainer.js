import React from "react";
import TodoItem from "./TodoItem";
import ItemForm from "./ItemForm";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";

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
			isLoading: false,
			// timeToGetBusy: false,
		};
	}

	// DID MOUNT
	componentDidMount() {
		// console.log("Component did mount");
		axios
			.get("https://jsonplaceholder.typicode.com/todos", {
				params: { _limit: 10 },
			})
			// .get("http://localhost:3001/Tasks")
			.then((response) => {
				console.log(response.data);
				// ADD JSON TODO
				this.setState({
					todos: response.data,
				});
			});
	}

	// UPDATE
	componentDidUpdate(response) {
		console.log("Component did update");
		console.log(response);
		if (this.state.todos.length > 5 && this.state.timeToGetBusy === false) {
			this.setState({
				timeToGetBusy: true,
			});
		} else if (
			this.state.todos.length < 5 &&
			this.state.timeToGetBusy === true
		) {
			this.setState({
				timeToGetBusy: false,
			});
		} else {
			return;
		}
	}

	// TASK CHECKBOX
	taskStatus = (id) => {
		const updatedTodosArr = this.state.todos.map((todo) => {
			if (todo._id === id) {
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
		// TASK IS LOADING MESSAGE
		this.setState({ isLoading: true });
		axios
			.post("https://jsonplaceholder.typicode.com/todos", {
				title: title,
				completed: false,
			})
			.then((response) => {
				console.log(response.data);

				const todosState = [...this.state.todos];
				todosState.unshift(response.data);

				this.setState({
					todos: todosState,
					// TASK IS LOADING MESSAGE
					isLoading: false,
				});
			})
			.catch((err) => {
				// SIMPLE Error-Handling
				// MORE:
				// https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
				alert("Beim hinzufügen gab es einen Fehler: " + err.response);
				console.error(err);
			});

		return;
	};

	// DELETE TASK
	deleteTask = (id) => {
		this.setState({ isLoading: true });
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((response) => {
				console.log(response);

				const updatedTodosArr = this.state.todos.filter(
					(todo) => todo.id !== id
				);
				this.setState({
					todos: updatedTodosArr,
					isLoading: false,
				});
			})
			.catch((err) => {
				alert("Beim Entfernen gab es einen Fehler: " + err.response);
				console.error(err);
			});
	};

	render() {
		// console.log("Component render");
		return (
			<div style={this.state.isLoading ? { opacity: 0.3 } : null}>
				{/* TASK INPUT */}
				<ItemForm addTaskItem={this.addTaskItem} />

				{/* TASK IS LOADING MESSAGE */}
				{this.state.isLoading ? <p>Task is loading...</p> : null}

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
