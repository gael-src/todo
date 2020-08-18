// import React, { Component, useState } from "react";
import React, { Component, useState, useEffect } from "react";

const ItemForm = (props) => {
	console.log(useState("hello"));

	const [title, setTitle] = useState("");
	const [correctLength, setCorrectLength] = useState(false);
	const [invalidCharacter, setInvalidCharacter] = useState(false);

	// HANDLER
	// const onChangeHandler = (e) => {
	// 	setTitle(e.target.value);
	// };

	// USEEFFECT - HOOK FOR : 
	// COMPONENTDIDMOUNT - COMPONENTDIDUPDATE - COMPONENTWILLUNMOUNT
	useEffect(() => {
		console.log("useEffect function from Form triggered")
	})

	// ADD TASK
	const addTask = (event) => {
		// this.setState({ title: event.target.value });
		setTitle(event.target.value);
	};

	// SUBMIT TASK
	const submitTask = (event) => {
		event.preventDefault();

		// CHECK FOR @ SIGN
		if (title.includes("@")) {
			return setInvalidCharacter(true);
		} else {
			setInvalidCharacter(false);
		}

		// LENGTH CHECK
		if (title.length > 3 && title.length < 25) {
			// SET STATE
			props.addTaskItem(title);

			// RESET INPUT
			setCorrectLength(false);
			setTitle("");
		} else {
			// RESET INPUT
			setCorrectLength(true);
		}
	};

	return (
		<form className="task-form" action="#">
			<label htmlFor="#">Add a task:</label>
			<input type="text" value={title} onChange={addTask} />

			{correctLength ? <p>Task musst be between 3 and 25 length</p> : null}
			{invalidCharacter ? <p>Please don't use @ in your Todos!</p> : null}
			<button onClick={submitTask}>Submit</button>
		</form>
	);
};

export default ItemForm;
