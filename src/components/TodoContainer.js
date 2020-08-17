import React from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import Header from "./Header";
// import { v4 as uuidv4 } from "uuid";
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
			isLoading: false,
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
	componentDidUpdate() {
		console.log("Component did update");
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
		// CURRENT TASK AND STATE TODOS
		// const currentTask = {
		// 	id: uuidv4(),
		// 	title: title,
		// 	completed: false,
		// };
		// const todosState = [...this.state.todos];

		// PUSH INTO LIST
		// todosState.push(currentTask);

		// RESET COMMENT AND NAME IN STATE
		// this.setState({
		// 	todos: todosState,
		// });
	};

	// DELETE TASK
	deleteTask = (id) => {
		this.setState({ isLoading: true });
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((response) => {
				console.log(response);
				// DELETE TASK
				const updatedTodosArray = this.state.todos.filter(
					(item) => item.id !== id
				);

				this.setState({
					todos: updatedTodosArray,
					isLoading: false,
				});
			})
			// .then((response) => {
			// 	console.log(response.data);

			// 	// const todosState = [...this.state.todos];
			// 	// todosState.unshift(response.data);

			// 	// this.setState({
			// 	// 	todos: response.data,
			// 	// 	// TASK IS LOADING MESSAGE
			// 	// 	isLoading: false,
			// 	// });
			// })
			.catch((err) => {
				// SIMPLE Error-Handling
				// MORE:
				// https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
				alert("Beim entfernen gab es einen Fehler: " + err.response);
				console.error(err);
			});

		// const updatedTodosArray = this.state.todos.filter((item) => item.id !== id);

		// this.setState({
		// 	todos: updatedTodosArray,
		// });
	};

	render() {
		// console.log("Component render");
		return (
			<div style={this.state.isLoading ? { opacity: 0.3 } : null}>
				{/* HEADER */}
				<Header timeToGetBusy />

				{/* TASK INPUT */}
				<Form addTaskItem={this.addTaskItem} />

				{/* TASK IS LOADING MESSAGE */}
				{this.state.isLoading ? <p>Task is loading...</p> : null}

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
