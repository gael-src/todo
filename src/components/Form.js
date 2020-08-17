import React, { Component, useState } from "react";

const Form = (props) => {
	console.log(useState("hello"));

	const [title, setTitle] = useState("");
	const [correctLength, setCorrectLength] = useState(true);

	// HANDLER
	const onChangeHandler = (e) => {
		setTitle(e.target.value);
	};

	// ADD TASK
	const addTask = (event) => {
		// this.setState({ title: event.target.value });
		setTitle(event.target.value);
	};

	// SUBMIT TASK
	const submitTask = (event) => {
		event.preventDefault();

		// LENGTH CHECK
		if (title.includes("@")) {
			// CHECK FOR @ SIGN
			alert("Please don't use @ sign");
		} else if (title.length > 3 && title.length < 25) {
			// SET STATE
			props.addTaskItem(title);

			// RESET INPUT
			setCorrectLength(true);
			setTitle("");
		} else {
			// RESET INPUT
			setCorrectLength(false);
		}
	};

	return (
		<form className="task-form" action="#">
			<label htmlFor="#">Add a task:</label>
			<input type="text" value={title} onChange={addTask} />
			{correctLength ? null : <p>Task musst be between 3 and 25 length</p>}
			<button onClick={submitTask}>Submit</button>
		</form>
	);
};

export default Form;
