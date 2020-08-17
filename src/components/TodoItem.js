import React from "react";
import "../css/todoItem.scss";

// const completedStyle = {
// 	fontStyle: "italic",
// 	color: "#d35e0f",
// 	opacity: 0.4,
// 	textDecoration: "line-through",
// };

// FUNCTIONAL COMPONENT
class TodoItem extends React.Component {
	// constructor(props) {
	//     super(props);
	// }

	// PROPS WRITING ALTERNATIVE
	// const { completed, handleChange, deleteTodoHandler, title, id } = props;

	render() {
		const props = this.props;
		return (
			<li className="li-task">
				{/* ALTERNATIVE TO IN-LINE STYLE */}
				<span className={props.completed ? "completed-item" : null}>
					{this.props.title}
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
				>
					x
				</button>
			</li>
		);
	}
}

export default TodoItem;
