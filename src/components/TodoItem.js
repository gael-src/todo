import React from "react";
import "../css/todoItem.scss";

// FUNCTIONAL COMPONENT
const TodoItem = (props) => {
	// PROPS WRITING ALTERNATIVE
	// const { completed, handleChange, deleteTodoHandler, title, id } = props;
	return (
		<li className="li-task">
			{/* ALTERNATIVE TO IN-LINE STYLE */}
			<span className={props.completed ? "completed-item" : null}>
				{props.title}
			</span>

			<input
				className="check-box"
				type="checkbox"
				checked={props.completed}
				onChange={() => {
					props.taskStatus(props.id);
				}}
			></input>

			<button
				// onClick={props.deleteTask}
				onClick={() => {
					props.deleteTask(props.id);
				}}
			>
				x
			</button>
		</li>
	);
};

export default TodoItem;
