import React from "react";
import "../css/todoItem.css";
import Priority from "./Priority";
import ThemeContext from "../context/ThemeContext";

// const completedStyle = {
// 	fontStyle: "italic",
// 	color: "#d35e0f",
// 	opacity: 0.4,
// 	textDecoration: "line-through",
// };

const darkButtonStyle = {
	backgroundColor: "black",
	border: "none",
	color: "white",
};

// FUNCTIONAL COMPONENT
class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			priority: null,
		};
	}

	// CONNECT CONTEXT
	static contextType = ThemeContext;

	priorityHandleChange = (e) => {
		console.log("priorityHandleChange");
		console.log(e);
		this.setState({
			priority: e.target.value,
		});
		// if (e.target.value === "priority") {
		// 	console.log("priority");
		// }
		// if (this.state. === "high") {
		// 	console.log("high");
		// 	titleStyle = highPriority;
		// }
		// if (e.target.value === "middle") {
		// 	console.log("middle");
		// }
		// if (e.target.value === "low") {
		// 	console.log("low");
		// 	titleStyle = lowPriority;
		// }
	};

	// PROPS WRITING ALTERNATIVE
	// const { completed, handleChange, deleteTodoHandler, title, id } = props;

	// USEEFFECT - HOOK FOR :
	// COMPONENTDIDMOUNT - COMPONENTDIDUPDATE - COMPONENTWILLUNMOUNT
	// useEffect(() => {
	// 	console.log("useEffect function from Form triggered")
	// })

	render() {
		const props = this.props;

		let titleStyle = null;

		const highPriority = {
			fontWeight: "bold",
		};

		const lowPriority = {
			color: "grey",
		};

		if (this.state.priority === "high") {
			titleStyle = highPriority;
		} else if (this.state.priority === "low") {
			titleStyle = lowPriority;
		}
		const isDark = this.context[0] === "dark" ? true : false;
		const titleSmall = this.props.title;
		const titleCap = this.props.title.toUpperCase();

		return (
			<li className="li-task">
				{/* ALTERNATIVE TO IN-LINE STYLE */}
				{this.state.priority === "high" ? <span>!</span> : null}
				<span
					className={props.completed ? "completed-item" : null}
					style={titleStyle}
				>
					{isDark ? titleCap : titleSmall}
				</span>

				<input
					className="check-box"
					type="checkbox"
					checked={this.props.completed}
					onChange={() => {
						this.props.taskStatus(this.props.id);
					}}
				></input>

				<button
					// onClick={this.props.deleteTask}
					onClick={() => {
						this.props.deleteTask(this.props.id);
					}}
					style={isDark ? darkButtonStyle : null}
				>
					{isDark ? "Destroy!" : "Delete"}
				</button>
				{/* CONTEXT VALUE */}
				{/* <span>{this.context}</span> */}
				<Priority
					priorityHandleChange={this.priorityHandleChange}
					priority={this.state.priority}
				/>
			</li>
		);
	}
}

export default TodoItem;
