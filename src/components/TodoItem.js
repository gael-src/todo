import React from "react";

// FUNCTIONAL COMPONENT
const TodoItem = (props) => {
	return (
		<li className="li-task">
			{props.title}

			<input
				type="checkbox"
				checked={props.completed}
				onChange={() => props.handleChange(props.id)}
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
